var http   = require('http');
var handle = require('./handle');
var events = require('events');
var hello  = require('console-log-hello-world');

var emiter = new events.EventEmitter();



// emiter.on('say12', say);

// function say() {
//     console.log('Im say');
// }

// emiter.emit('say12');

var server = http.createServer(handle);

server.listen(3000, function(){
    console.log('Server listening at port 3000');
})



// Removendo dependecia de pacotes extenos
// npm uninstall console-log-hello-world

// Atualizando pacotes extenos
// npm update console-log-hello-world