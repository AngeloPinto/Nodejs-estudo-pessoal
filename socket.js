var ws   = require('websocket').server;
var http = require('http');

// Instancia o socket
var socket = new ws({
    httpServer: http.createServer().listen(3000) // servidor ouvindo a porta
});

// Captura a origem do request
socket.on('request', function (req) {

    var conn = req.accept(null, req.origin);

    console.log('Origin ->', req.origin);

    conn.on('message', function (message) {
        conn.sendUTF('Hello from server');
    });

    conn.on('close', function (connection) {
        console.log('connection is closed');
    })
})