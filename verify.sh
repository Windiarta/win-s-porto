#!/bin/sh
set -u
ROOT="/Users/win/Documents/code/portonew"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cd "$ROOT" || exit 1
PORT=4173 npm run preview -- --port 4173 > .preview.log 2>&1 &
PID=$!
sleep 4
curl -s -o /dev/null -w 'index HTTP %{http_code}\n' http://localhost:4173/
curl -s -o /dev/null -w 'resume HTTP %{http_code}\n' http://localhost:4173/resume.pdf
curl -s -o /dev/null -w 'route /projects/pinter HTTP %{http_code}\n' http://localhost:4173/projects/pinter
curl -s -o /dev/null -w 'route /agents/pac-agent HTTP %{http_code}\n' http://localhost:4173/agents/pac-agent
curl -s -o /dev/null -w 'route /experience/pupuk-indonesia HTTP %{http_code}\n' http://localhost:4173/experience/pupuk-indonesia
"$CHROME" --headless=new --use-angle=swiftshader --enable-unsafe-swiftshader --enable-logging=stderr --virtual-time-budget=10000 --dump-dom http://localhost:4173/ > .dom-dump.html 2> .console.log
"$CHROME" --headless=new --use-angle=swiftshader --enable-unsafe-swiftshader --enable-logging=stderr --virtual-time-budget=8000 --dump-dom http://localhost:4173/projects/pinter > .dom-case.html 2>> .console.log
"$CHROME" --headless=new --use-angle=swiftshader --enable-unsafe-swiftshader --enable-logging=stderr --virtual-time-budget=8000 --dump-dom http://localhost:4173/agents/pac-agent > .dom-agent.html 2>> .console.log
kill $PID 2>/dev/null
echo "--- console (filtered):"
grep -i "console" .console.log | grep -iv "cvdisplaylink\|allocator\|web_applications" | head -30
echo "--- dom checks:"
grep -o 'id="platform"\|id="projects"\|id="experience"\|WINDIARTA\|mailto:windiarta.widjaja@gmail.com\|resume.pdf\|card-link\|card-cta\|Case study\|Agent detail\|Full detail\|href="/projects/\|href="/agents/\|href="/experience/' .dom-dump.html | sort | uniq -c
echo "--- case page checks (pinter):"
grep -o 'Pupuk Intelligence Center\|case-title\|case-hero\|case-meta-row\|pipeline\|ExecutorV2\|zero-copy clone\|CrewAI to Google ADK\|Measured outcomes\|rel-card\|Email me about this work' .dom-case.html | sort | uniq -c
echo "--- agent page checks (pac):"
grep -o 'Production Analytics Center\|case-title\|case-hero\|5 subsidiaries\|under 2 minutes\|The platform underneath\|PINTER case study' .dom-agent.html | sort | uniq -c
echo "--- dom size:"
wc -c .dom-dump.html
