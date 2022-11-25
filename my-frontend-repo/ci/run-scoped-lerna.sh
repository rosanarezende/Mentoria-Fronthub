#!/bin/bash
set -e -o pipefail

yarn lerna run start --stream --scope=@resultadosdigitais/$@
