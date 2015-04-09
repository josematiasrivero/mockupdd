# README #

## Introduction ##

MockupDD Engine is web application which uses user interface mockups in the form of bitmaps as a basis to specify and infer further application requirements

## Basic project Setup to get the web app running ##

1. Install Git
2. After installing Git, run the command `git clone http://bitbucket.org/jmrivero/mockupdd-engine.git`
3. Install [Apache Maven](http://maven.apache.org/). After the installation, the command `mvn` should work
4. In order to run the DB creation scripts without changes, user `root` without any password should be provided. As a result, the command `mysql -uroot` must log you into the database directly.
5. At the root of the project, run `config/scripts/recreateSchema.sh` in order to instantiate the DB
6. At the root of the project, run `mvn clean install` which will build the project and run the tests. Then, to get the web application running with [Jetty](http://eclipse.org/jetty/) at the default port (8080), execute `mvn jetty:run` at the `modules/mockupdd-editor` folder

## Recommented setup for development ##

1. Download [Eclipse IDE for Java EE Developers](https://www.eclipse.org/downloads/)
2. At the root of the project, run `mvn eclipse:eclipse`. This will create the Eclipse Project metainfo.
3. [Import](http://help.eclipse.org/juno/index.jsp?topic=%2Forg.eclipse.platform.doc.user%2Ftasks%2Ftasks-importproject.htm) the project in Eclipse
4. Follow [this guide](http://docs.codehaus.org/display/JETTY/Debugging+with+the+Maven+Jetty+Plugin+inside+Eclipse) in order to start the web application from Eclipse with debugging enabled

## Tips for development with Eclipse ##

### Code Style ###
Pressing `Ctrl + Shift + F` in any code window will automatically format the current file according to configured code formatting options. Import the following XML files to use the formatting options for this project:

- `Preferences-Java-CodeStyle-CodeTemplates.xml` in Preferences -> Java -> Code Style -> Code Templates
- `Preferences-Java-CodeStyle-Formatter.xml` in Preferences -> Java -> Code Style -> Formatter
- `Preferences-Java-Editor-Templates.xml` in Preferences -> Java -> Editor -> Templates

### Keyboard shortcuts ###

- `Ctrl + Shift + R`: search for resources
- `Ctrl + Shift + T`: search for classes

There are a bunch of useful keyboard shortcuts to agilize development with Eclipse, just google for them :)

## If you have any problems... ##

Write an e-mail to jose.matias.rivero@gmail.com or mrivero@lifia.info.unlp.edu.ar