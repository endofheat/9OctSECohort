const express = require("express");
const app = express();
const http = require("http");

const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log('a user connected')
    io.emit("connection", "a user connected");//send event to all clients (sockets)
    socket.emit("welcome", "welcome new user");//send event to the client who sent event
    socket.broadcast.emit("new user", "a new client has connected to the server");//send event to all clients except the one who sent event

    socket.on('new user',(nickname) => { // need to add a form to ask user input their nickname
        io.emit('new user', nickname + 'connected' );
    })
    socket.on('chat message', (nickname, msg) => {
        console.log('message: '+ msg);
        io.emit('chat message', nickname + ': ' + msg);
    })

    socket.on('disconnect', (nickname) => {
        console.log(nickname + 'disconnected');
        socket.broadcast.emit('new user', nickname + 'left' );
    });
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});