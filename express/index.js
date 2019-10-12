var express = require('express');

var app = express();

app.get('/', (req, res)=>{
    res.send('Hello from Express');
});

app.get('/hello', (req, res)=>{
    res.json({
        msg: 'This is my router hello'
    });
});

app.get('/hello/:name', (req, res)=>{
    res.json({
        msg: 'This is my param ' + req.params.name
    });
});

app.listen(3000,()=>{
    console.log('Express has been started');
});