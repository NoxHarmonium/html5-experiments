#!/bin/bash
#
#	Python has a nice little built in web server that needs
# 	zero configuration. This script will attempt to start it
# 	by detecting your python version.
#

command -v pfython >/dev/null 2>&1 || 
{ 
	echo >&2 "You need to install python for this script to work."; 
	exit 1; 
}

ret=`python -c 'import sys; print("%i" % (sys.hexversion<0x03000000))'`
if [ $ret -eq 0 ]; then
    echo "Python version 3.x detected. Starting server...";
	python -m http.server;
else 
    echo "Python version 2.x detected. Starting server...";
	python -m SimpleHTTPServer;
fi

