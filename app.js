var http = require('http');

function handle(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write('<!DOCTYP "html">');
    response.write('<html>');
    response.write('<head>');
    response.write('<meta charset="utf-8">');
    response.write('<title>');
    response.write('Server Node');
    response.write('</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('<h1>Este é um servidor node</h1>');
    response.write('</body>');
    response.write('</html>');

    response.end();
}

var server = http.createServer(handle);

server.listen(3000, function(){
    console.log('Server is listening at port 3000');
});