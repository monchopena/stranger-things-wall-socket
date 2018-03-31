const socket_io = require('socket.io');
const io = socket_io();
const socketApi = {};

socketApi.io = io;

io.on('connection', (client) => {
    console.log('A user connected');
    client.on('join', (data) => {
        console.log(data);
    });
    client.on('msg', (msg) => {
        console.log(msg);
        client.broadcast.emit('broad',msg);
    });
});

module.exports = socketApi;