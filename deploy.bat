@echo off
call ng build -e prod
cp dist/index.html dist/404.html
cp CNAME dist/CNAME
ngh
