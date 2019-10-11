var http = require('http');

function handle(request, response) {
    response.end('Hello from http module');
}

var server = http.createServer(handle);

server.listen(3000, function(){
    console.log('Server is listening at port 3000');
});