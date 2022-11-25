notAllowedFiles=(packages/*/*-lock.json)

if [[ -f ${notAllowedFiles[0]} ]] || [[ -f  package-lock.json ]]
then 
  echo ''
  echo '---------------------------------------'
  echo ''
  echo 'You CANNOT push package-lock.json files!'
  echo 'Found:'
  [[ -f  package-lock.json ]] && echo './package-lock.json'
  echo "$notAllowedFiles"  
  echo ''
  echo '---------------------------------------'
  echo ''
  exit 1
else
  exit 0
fi
