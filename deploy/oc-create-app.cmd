@echo off
REM oc delete bc lerna
REM oc delete dc lerna
REM oc delete svc lerna

REM cd C:\Projects\Lerna\src\Lerna.Web

REM dotnet publish -c Debug /p:MicrosoftNETPlatformLibrary=Microsoft.NETCore.App
REM oc new-build --name=lerna dotnet:2.2 --binary=true
REM oc start-build lerna --from-dir=bin\Debug\netcoreapp2.2\publish
REM oc new-app lerna:latest -e PGSQL=172.30.199.82
REM oc expose svc/lerna