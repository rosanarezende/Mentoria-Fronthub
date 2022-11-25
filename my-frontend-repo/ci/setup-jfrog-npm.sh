#!/bin/bash
set -e -o pipefail

RESET="\033[0m"
COLOR_BROWN_ORANGE="\033[33m"

# io functions
pretty_print() {
  local message="$1"
  echo -e "${COLOR_BROWN_ORANGE}${message}${RESET}"
}

JFROG_NPM_REPOSITORY=${JFROG_NPM_REPOSITORY:-'https://resultadosdigitais.jfrog.io/resultadosdigitais/api/npm/npm'}
REGISTRY=$(npm config get @resultadosdigitais:registry)

configure_jfrog() {
  USERNAME=$(cut -d '@' -f1 <<< $1)
  PASSWORD=$2
  curl -u${USERNAME}:${PASSWORD} ${JFROG_NPM_REPOSITORY}/auth/resultadosdigitais > ~/.npmrc
}

if [ "$REGISTRY" == "${JFROG_NPM_REPOSITORY}" ] || [ "$REGISTRY" == "${JFROG_NPM_REPOSITORY}/" ]; then
  echo "jFrog is already configured, nothing to be done"
  exit
fi

if [ -z ${JFROG_USERNAME+x} ] || [ -z ${JFROG_PASSWORD+x} ]; then
  if [[ -n ${CI+x} ]]; then
    echo 'You need to configure $JFROG_USERNAME and $JFROG_PASSWORD environment variables'
    exit 1
  fi
  while true; do
    echo ""
    echo ""
    echo -e "===============$(pretty_print "WARNING")==============="
    echo " You don't have jFrog NPM registry for @resultadosdigitais"
    echo " Follow instructions below to configure "
    echo "====================================="
    echo ""
    echo ""
    read -p "Do you have jFrog API KEY? $(pretty_print '(y/n)')" has_jfrog_apikey

    case $has_jfrog_apikey in
    [SsYy]*)

      read -p "Input your RD email or username Sample name.surname@resultadosdigitais.com.br: " email
      read -p "Input jFrog API KEY: " jfrogApiKey
      configure_jfrog ${email%*} $jfrogApiKey
      echo ""
      echo ""
      pretty_print "Your jFrog was configured with success!"
      pretty_print "Run this command again for the configuration take effect"
      echo ""
      echo ""
      exit 1
      break
      ;;
    [Nn]*)

      echo "How to create your jFrog API KEY"
      echo "1 - Go to address https://resultadosdigitais.jfrog.io and "
      echo "authenticate with your Google Account (@resultadosdigitais.com.br);"
      echo "2 - Go to page https://resultadosdigitais.jfrog.io/ui/admin/artifactory/user_profile"
      echo "3 - Create your API KEY and paste here;"
      echo ""
      echo ""
      read -n 1 -s -r -p "Press ENTER to continue..."

      ;;
    *) echo "Please, answer Yes (Y) or No (N)" ;;
    esac
  done
else
  pretty_print "Setuping jFrog with environment variables..."

  configure_jfrog "${JFROG_USERNAME}" "${JFROG_PASSWORD}"

  pretty_print "Your jFrog was configured with success!"
fi
