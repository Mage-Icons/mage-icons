# clear build files
echo "Clearing build folders"
rm -rf ./build/react/icons/stroke
rm -rf ./build/react/icons/bulk

# create build folders
echo "Initializing build paths"
mkdir ./build/react/icons/stroke
mkdir ./build/react/icons/bulk

# build icon packs
echo "Building Icons"
npm run build

# move build to their respective repos
# move build for reacts
echo "Clearing react icons"
rm -rf ./mage-icons-react/src/bulk
rm -rf ./mage-icons-react/src/stroke

echo "Updating react icons"
mv ./build/react/icons/stroke ./mage-icons-react/src/stroke
mv ./build/react/icons/bulk ./mage-icons-react/src/bulk

cd ./mage-icons-react
yarn build

git add .
git commit -m "Updating icon pack"
git push origin main

cd ..
git add .
git commit -m "Adding icon packs"
git push origin main

