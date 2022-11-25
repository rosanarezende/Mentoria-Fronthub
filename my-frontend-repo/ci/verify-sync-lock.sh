#!/usr/bin/env bash

set +e
git diff --exit-code || (echo "\
\
\
---------------------------\
    Your lock files are WRONG. Please, run 'ci/sync-lock' to fix and commit the changes before you go on\
\
\
---------------------------" && exit 1)
