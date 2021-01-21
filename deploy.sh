#!/bin/bash
cd code; npm run build; cd ..;
rm -rf docs
cp -r code/dist docs
touch docs/.nojekyll
git add -u docs
git add docs/*
git commit -m'deploy'
git push