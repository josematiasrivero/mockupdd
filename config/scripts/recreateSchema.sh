#!/bin/bash

green='\033[0;32m';
yellow='\033[0;33m';
red='\033[0;31m';
reset='\033[0m';

BASEDIR="$(dirname $0)/../schema"
USER="-u $OPENSHIFT_MYSQL_DB_USERNAME"
HOST="-h $OPENSHIFT_MYSQL_DB_HOST"
PASS="--password=$OPENSHIFT_MYSQL_DB_PASSWORD"
PORT="-P $OPENSHIFT_MYSQL_DB_PORT"

if [ -z $OPENSHIFT_MYSQL_DB_USERNAME ]
then
	USER="-u root"
fi

if [ -z $OPENSHIFT_MYSQL_DB_PASSWORD ]
then
	PASS=
fi

if [ -z $OPENSHIFT_MYSQL_DB_HOST ]
then
	HOST="-h localhost"
fi

if [ -z $OPENSHIFT_MYSQL_DB_PORT ]
then
	PORT="-P 3306"
fi


function apply {
	echo -e "${yellow}Executing $1${reset}";
	mysql $HOST $USER $PASS $PORT < $BASEDIR/$1
}

echo -e "${green}Recreating schema${reset}";

apply initial-schema.sql

echo -e "${green}Schema created${reset}";

