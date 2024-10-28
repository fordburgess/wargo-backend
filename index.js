const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('node:http')


const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000', // React app's URL
        methods: ['GET', 'POST']
      }
});

app.get('/', (req, res) => {
    res.send("Hello World! - Ford")
});

io.on('connection', (socket) => {
    console.log('User Connected');
})

const PORT = process.env.PORT || 5000;

server.listen((PORT), () => {
    console.log("Hello World")
});

module.exports = app