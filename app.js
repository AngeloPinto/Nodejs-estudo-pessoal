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