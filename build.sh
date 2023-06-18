#!/bin/bash

set -e
# create build folders
echo "Initializing build paths"
mkdir -p ./bin
cd ./bin
rm -rf mage-icons-react
git clone git@github.com:Mage-Icons/mage-icons-react.git
cd ..
mkdir -p ./bin/mage-icons-react/src/stroke
mkdir -p ./bin/mage-icons-react/src/bulk

# build icon packs
echo "Building Icons"
yarn
yarn build

# transpile react icons
cd ./bin/mage-icons-react
yarn
yarn build
