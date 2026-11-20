@echo off
title SARAGIX - Servidor Pessoal e Publico na Rede
set "PATH=%PATH%;C:\Program Files\nodejs"
cd /d "C:\Users\pedro\.gemini\antigravity\scratch\chess-reviewer"
echo Iniciando SARAGIX Pessoal (Porta 5173) e SARAGIX Publico na Rede (Porta 5174)...
start "SARAGIX Publico (Rede)" cmd /k "set PATH=%PATH%;C:\Program Files\nodejs && npm.cmd run dev -- --mode public --host 0.0.0.0 --port 5174"
start "" "http://localhost:5173/"
call npm.cmd run dev -- --host 0.0.0.0 --port 5173
pause
