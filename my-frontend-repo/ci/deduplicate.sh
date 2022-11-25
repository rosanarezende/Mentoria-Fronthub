#!/usr/bin/env bash
# deduplicate references in all yarn.lock files

npx ls yarn.lock ./packages/*/yarn.lock | xargs -L 1 npx yarn-deduplicate
