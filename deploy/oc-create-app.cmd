@echo off
oc delete bc lerna
oc delete dc lerna
oc delete svc lerna

cd C:\Projects\Lerna\src\Lerna.Web

dotnet publish -c Debug /p:MicrosoftNETPlatformLibrary=Microsoft.NETCore.App
oc new-build --name=lerna dotnet:2.2 --binary=true
oc start-build lerna --from-dir=bin\Debug\netcoreapp2.2\publish
oc new-app lerna:latest -e PGSQL=172.30.85.225
oc expose svc/lerna