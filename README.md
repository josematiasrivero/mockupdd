# README #

## Introduction ##

MockupDD Engine is web application which uses user interface mockups in the form of bitmaps as a basis to specify and infer further application requirements

## Basic project Setup to get the web app running ##

### Step 1. Install [Apache Maven](http://maven.apache.org/) ###
After the installation, the command

```
#!bash
mvn

```
should work

### Step 2. Install MySQL ###
In order to run the DB creation scripts without changes, user "root" without any password should be provided, i.e., the command

```
#!bash
mysql -uroot

```
must log you into the database

### Step 3. Recreate Database ###
At the root of the project, run the following script

```
#!bash
config/scripts/recreateSchema.sh

```

### Step 4. Run the app ###
At the root of the project, run the following command

```
#!bash
mvn clean install
```
which will build the project and run the tests.

To get the web application running with [Jetty](http://eclipse.org/jetty/) at the default port (8080), execute the following command
```
#!bash
mvn jetty:run
```

### If you have any problems... ###

Write an e-mail to jose.matias.rivero@gmail.com or mrivero@lifia.info.unlp.edu.ar