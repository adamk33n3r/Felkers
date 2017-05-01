@echo off
call ng build --prod --aot=false
cp dist/index.html dist/404.html
cp CNAME dist/CNAME
ngh
