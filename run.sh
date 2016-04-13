export MAVEN_OPTS="-Xmx256m -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,address=8010,server=y,suspend=n"
mvn jetty:run -Djetty.port=8080 -f modules/mockupdd-editor/pom.xml
