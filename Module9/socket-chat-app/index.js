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
    io.emit("connection", "a user connected");//send event to all clients (sockets)
    socket.emit("welcome", "welcome new user");//send event to the client who sent event
    socket.broadcast.emit("new user", "a new client has connected to the server");//send event to all clients except the one who sent event

    socket.on('chat message', (msg) => {
        console.log('message: '+msg);
        io.emit('chat message', msg);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});