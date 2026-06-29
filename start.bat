@echo off
cd /d %~dp0
echo.
echo TREINO NO DECK - Body Wise x Le Buffet Lounge
echo.
echo Iniciando servidor de desenvolvimento...
start "Next.js" cmd /c "npm run dev"
echo Aguardando...
ping -n 6 127.0.0.1 > nul
echo Iniciando ngrok...
start "ngrok" cmd /c "ngrok http http://localhost:3000"
echo.
echo Next.js rodando em http://localhost:3000
echo Tunnel ngrok na janela que abriu
echo.
pause
