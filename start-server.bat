@ECHO OFF
REM Run this on windows to open up a python webserver
REM This script requires python and will try to determine 
REM which webserver module to use.
REM 
REM The detection method isn't very intelligent but
REM I'm not used to writing BAT scripts.

echo Trying the webserver module for python 2.x...
python -m SimpleHTTPServer
IF NOT %ERRORLEVEL%==0 GOTO VER3
GOTO End

:VER3
echo That module didn't work. Trying the one for python 3.x...
python -m http.server

:End
