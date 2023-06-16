
# create build folders
echo "Initializing build paths"
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

