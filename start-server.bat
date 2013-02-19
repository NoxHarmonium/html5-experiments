@ECHO OFF
REM Run this on windows to open up a python webserver
REM Requires python. Will try to determine which
REM webserver module to use.

echo Trying the webserver module for python 2.x...
python -m SimpleHTTPServer
IF NOT %ERRORLEVEL%==0 GOTO VER3
GOTO End

:VER3
echo That module didn't work. Trying the one for python 3.x...
python -m http.server

:End