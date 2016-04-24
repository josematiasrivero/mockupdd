./stop-app.sh
./build.sh
./gnome-terminal-run.sh
while ! echo exit | nc localhost 8080; do sleep 1; done
google-chrome --profile-directory="MockupDD"
