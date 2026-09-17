#!/bin/sh
set -u
ROOT="/Users/win/Documents/code/portonew"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cd "$ROOT" || exit 1
npm run preview -- --port 4173 > .preview.log 2>&1 &
PID=$!
sleep 4
SHOTS="--use-angle=swiftshader --enable-unsafe-swiftshader --virtual-time-budget=12000"
"$CHROME" --headless=new $SHOTS --window-size=1440,900 --screenshot=.shot-hero-desktop.png http://localhost:4173/ 2>/dev/null
"$CHROME" --headless=new $SHOTS --window-size=1440,900 --screenshot=.shot-platform-desktop.png "http://localhost:4173/#platform" 2>/dev/null
"$CHROME" --headless=new $SHOTS --window-size=1440,9400 --screenshot=.shot-full-desktop.png http://localhost:4173/ 2>/dev/null
"$CHROME" --headless=new $SHOTS --window-size=390,844 --screenshot=.shot-hero-mobile.png http://localhost:4173/ 2>/dev/null
"$CHROME" --headless=new $SHOTS --window-size=390,15000 --screenshot=.shot-full-mobile.png http://localhost:4173/ 2>/dev/null
kill $PID 2>/dev/null
ls -la .shot-*.png
