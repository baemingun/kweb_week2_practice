const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('./practice.txt','UTF-8', function(err,data) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=uft-8');
        res.end(data);
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

