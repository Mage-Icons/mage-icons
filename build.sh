#!/bin/bash

set -e
# create build folders
echo "Initializing build paths"
mkdir -p ./bin
cd ./bin
rm -rf mage-icons-react
git clone git@github.com:Mage-Icons/mage-icons-react.git
cd ..
rm -rf ./bin/mage-icons-react/bulk
rm -rf ./bin/mage-icons-react/stroke
rm -rf ./bin/mage-icons-react/social-bw
rm -rf ./bin/mage-icons-react/social-color
mkdir -p ./bin/mage-icons-react/src/stroke
mkdir -p ./bin/mage-icons-react/src/bulk
mkdir -p ./bin/mage-icons-react/src/social-bw
mkdir -p ./bin/mage-icons-react/src/social-color

# build icon packs
echo "Building Icons"
yarn
yarn build-react

# transpile react icons
cd ./bin/mage-icons-react
git pull
yarn
yarn build
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
version=$(cat version.txt)
yarn version --new-version "$version"
rm version.txt