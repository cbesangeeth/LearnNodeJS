const http = require('http');

const server = http.createServer('connection' , (req, res) =>{

    if(req.url ==='/'){
        res.write("Hello World");
        res.end();
    }

    if(req.url ==='/api/books'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on Port 3000');