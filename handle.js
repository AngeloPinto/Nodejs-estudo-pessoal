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

// exports.fn = handle;

module.exports = handle;