var fs = require('fs');

// fs = file system

var texto = 'Hello World from Node - Texto';

// Escreve em arquivos
fs.writeFile('data.txt', texto, (err) => {
    if (err) {
        throw (err);
    }
});

// Le arquivos
fs.readFile('data.txt', (err, texto) => {
    if (err) {
        throw (err);
    } else {
        console.log(texto.toString('utf-8'));
    }
});

// Lendo arquivos do diretorio
fs.readdir('.', (err, files) => {
    if (err) {
        throw (err);
    }
    console.log('-- All Files --');
    for (var file in files) {
        console.log(files[file]);
    }
});


// Lendo arquivos sync com filtro
fs  .readdirSync('.')
    .filter((file) => {
        return (file.endsWith('.js'));
    })
    .forEach((file) => {
        console.log(file);
    });