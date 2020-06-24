# Live Chat Room
## Features:
Deploy a chat room server on your network and use the client web app to send and recieve messages with real-time updates
## Description:
Express server with an API for sending and retrieving messages. React powered webapp to send and recieve messages. Messages are stored locally on the server without a database.
## Setup
**Installation**

    git clone https://github.com/ZacharyRener/Live-Chat-Room
    cd Live-Chat-Room/src/client/Webpack-Toolkit
    npm install
    ./node-modules/.bin/webpack
    cd ./../../../
    yarn build
    yarn start
    
## Access
The chat room can be accessed locally by navigating to localhost in a browser.
Devices on the same network can connect to the chat room by navigating to the hosting machine's ip address.
To make the chat room publicly accessible, port forward port 80 to the local ip address of your host machine.
