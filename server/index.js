const path = require('path');
var express = require('express');
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var socket = require('socket.io-client')('http://localhost:3000');

server.listen(3000);
app.use(express.static(path.join(__dirname, '../client/dist')));
// WARNING: app.listen(80) will NOT work here!


socket.on('connect', () => {
  console.log('yo')
})

io.on('connection', function (socket) {
  console.log('hi')
  io.emit('this', { will: 'be received by everyone'});

  socket.on('private message', function (from, msg) {
    console.log('I received a private message by ', from, ' saying ', msg);
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});
