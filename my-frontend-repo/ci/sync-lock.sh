#!/usr/bin/env bash
# sync lock files

rm -rf node_modules 
yarn lerna clean -y 
yarn install
yarn lerna bootstrap
