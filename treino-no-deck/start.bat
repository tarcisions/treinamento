@echo off
cd /d %~dp0
echo.
echo TREINO NO DECK - Body Wise x Le Buffet Lounge
echo.
echo Compilando para producao...
call npm run build
if %errorlevel% neq 0 (
    echo Erro no build. Pressione qualquer tecla para sair.
    pause
    exit /b 1
)
echo.
echo Build concluido. Iniciando servidor em producao...
start "Next.js" cmd /c "npm start"
echo Aguardando...
ping -n 6 127.0.0.1 > nul
echo Iniciando ngrok...
start "ngrok" cmd /c "ngrok http http://localhost:3000"
echo.
echo Servidor rodando em http://localhost:3000
echo Tunnel ngrok na janela que abriu
echo.
pause
