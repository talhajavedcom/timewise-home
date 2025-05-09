#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"                   # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

_front_end_url="https://timewise-diptas-math-academy.theexpertscloud.com" 
_remote="3.228.101.116"
_user="ubuntu"
_remote_directory_name="timewise-diptas-math-academy"


echo "❗❗❗ timewise Diptas Math Academy Deployment ❗❗❗"
echo "Local system name: $HOSTNAME"
echo "Local date and time: $(date)"

# Run npm to install the dependencies
nvm use 20

npm i


rsync -rtu --delete --progress "./" --exclude="node_modules" --exclude="tmp" --exclude=".git" --exclude="build" --exclude=".next" --exclude=".env" $_user@$_remote:/home/ubuntu/$_remote_directory_name

echo
echo "** Running commands on remote host named $_remote **"
echo

# connect to remote server
ssh -T "$_user"@"$_remote" "bash -s $_remote_directory_name" <<'EOL'
    #Refetching path of nvm

    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    export HOME="/home/ubuntu/"
    #
	now="$(date)"
	name="$HOSTNAME"
	up="$(uptime)"
	echo "Server name is $name"
	echo "Server date and time is $now"
	echo "Server uptime: $up"
    echo "remote_directory_name : $1"
    _remote_directory_name=$1
    _pm2_server_ref=$1

	echo "current directory : $pwd"

 	## go to desired directory
	cd /home/ubuntu/$_remote_directory_name

	echo "current directory : $pwd"
    nvm use 20
    
    # install npm
    echo "installing node module : $pwd"
    npm i

    # Run run build
    npm run build

    rm .env
    cp .env.dev .env

    # restart PM2
  pm2 stop $_pm2_server_ref --silent
  pm2 delete $_pm2_server_ref --silent
  pm2 start npm --name $_pm2_server_ref -- run start --time

  pm2 save

  # pm2 restart $_pm2_server_ref

  echo "Deployment Ended Local system name: $HOSTNAME"
  echo "Deployment Ended Local date and time: $(date)"

	echo "Bye"
EOL
