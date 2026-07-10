#!/bin/bash
# ============================================
# Treino no Deck - Setup Completo do Servidor
# Roda como root: bash setup.sh
# ============================================

set -e

DOMAIN="treinodeck.qd.je"
APP_DIR=$(pwd)
NODE_VERSION=22

echo ""
echo "============================================"
echo "  TREINO NO DECK - DEPLOY COMPLETO"
echo "============================================"
echo ""

# ---- 1. Sistema ----
echo "[1/8] Atualizando sistema..."
apt update && apt upgrade -y

# ---- 2. Dependencias ----
echo "[2/8] Instalando dependencias do sistema..."
apt install -y \
  curl \
  wget \
  git \
  build-essential \
  ufw \
  nginx \
  certbot \
  python3-certbot-nginx \
  unzip

# ---- 3. Node.js ----
echo "[3/8] Instalando Node.js $NODE_VERSION..."
if command -v node &> /dev/null; then
  CURRENT_NODE=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
  if [ "$CURRENT_NODE" -ge "$NODE_VERSION" ]; then
    echo "  Node.js $(node -v) ja instalado, pulando..."
  else
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
    apt install -y nodejs
  fi
else
  curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
  apt install -y nodejs
fi

echo "  Node: $(node -v) | NPM: $(npm -v)"

# ---- 4. Firewall ----
echo "[4/8] Configurando firewall..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# ---- 5. Build da aplicacao ----
echo "[5/8] Instalando dependencias e buildando..."
cd "$APP_DIR"
npm install
npm run build

echo "  Build completo: $APP_DIR/out"

# ---- 6. Nginx ----
echo "[6/8] Configurando Nginx..."
cat > /etc/nginx/sites-available/treinodeck <<NGINX
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;

    root $APP_DIR/out;
    index index.html;

    # Videos
    location ~* \.(mp4|webm)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        add_header Access-Control-Allow-Origin "*";
    }

    # Imagens
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # CSS/JS
    location ~* \.(css|js)$ {
        expires 7d;
        add_header Cache-Control "public";
    }

    # SPA fallback
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Seguranca
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript video/mp4 image/svg+xml;
    gzip_min_length 256;

    # Security headers
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self' blob:; font-src 'self';" always;
}
NGINX

ln -sf /etc/nginx/sites-available/treinodeck /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

if nginx -t 2>&1; then
  systemctl restart nginx
  systemctl enable nginx
  echo "  Nginx configurado e rodando"
else
  echo "  ERRO: Configuracao do Nginx invalida!"
  exit 1
fi

# ---- 7. Systemd (rebuild automatico) ----
echo "[7/8] Configurando systemd..."

cat > /etc/systemd/system/treinodeck-rebuild.service <<SERVICE
[Unit]
Description=Treino no Deck - Rebuild
After=network.target

[Service]
Type=oneshot
WorkingDirectory=$APP_DIR
ExecStart=/bin/bash -c 'git pull && npm install && npm run build && systemctl reload nginx'
User=root
StandardOutput=journal
StandardError=journal
SERVICE

cat > /etc/systemd/system/treinodeck-rebuild.timer <<TIMER
[Unit]
Description=Rebuild Treino no Deck a cada 6 horas

[Timer]
OnBootSec=5min
OnUnitActiveSec=6h
Persistent=true

[Install]
WantedBy=timers.target
TIMER

systemctl daemon-reload
systemctl enable treinodeck-rebuild.timer
systemctl start treinodeck-rebuild.timer
echo "  Timer de rebuild configurado (a cada 6h)"

# ---- 8. SSL ----
echo "[8/8] Configurando SSL..."
certbot --nginx \
  -d "$DOMAIN" \
  -d "www.$DOMAIN" \
  --non-interactive \
  --agree-tos \
  --email "admin@$DOMAIN" \
  --redirect

# ---- Script de deploy manual ----
cat > "$APP_DIR/deploy.sh" <<DEPLOY
#!/bin/bash
set -e
echo "=== Deploy Treino no Deck ==="
cd "$APP_DIR"
git pull
npm install
npm run build
systemctl reload nginx
echo "=== Deploy completo! ==="
DEPLOY
chmod +x "$APP_DIR/deploy.sh"

echo ""
echo "============================================"
echo "  DEPLOY COMPLETO!"
echo "============================================"
echo ""
echo "  Site:    https://$DOMAIN"
echo "  Repo:    $APP_DIR"
echo "  Build:   $APP_DIR/out"
echo ""
echo "  Comandos uteis:"
echo "    Deploy manual:    bash $APP_DIR/deploy.sh"
echo "    Ver status:       systemctl status nginx"
echo "    Ver logs nginx:   tail -f /var/log/nginx/error.log"
echo "    Rebuild timer:    systemctl status treinodeck-rebuild.timer"
echo "    Renovar SSL:      certbot renew --dry-run"
echo ""
