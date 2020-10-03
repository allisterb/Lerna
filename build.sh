#!/bin/bash

set -e 
cd src/Lerna.Web/
dotnet build -c "Debug" $*
cd ../../