# clear build files
rm -rf ./build/react/icons/stroke/*
rm -rf ./build/react/icons/bulk/*

# create build folders
mkdir ./build/react/icons/stroke
mkdir ./build/react/icons/builk

# build icon packs
npm run build

# move build to their respective repos
# 1. move build for reacts


