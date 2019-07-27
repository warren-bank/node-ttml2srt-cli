@echo off

set DIR=%~dp0.
set workspace=%DIR%\workspace

if exist "%workspace%" rmdir /Q /S "%workspace%"
mkdir "%workspace%"
cd "%workspace%"

call npm init -y
call npm install --save "%DIR%\.."
cls

set PATH=%workspace%\node_modules\.bin;%PATH%

mkdir "output"

call ttml2srt "%DIR%\.ttml\01.en.ttml" "./output/01.en.srt"

echo.
pause
