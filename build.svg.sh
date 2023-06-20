#!/bin/bash

set -e

echo "Building Icon Release"
rm -rf ./bin/svg
mkdir ./bin/svg

yarn build-svg

cd ./bin
zip -r mage-icons-svg.zip ./svg