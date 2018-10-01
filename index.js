const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const indexContent = fs.readFileSync(path.join(__dirname,'index.html'));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=uft-8');
    res.end(indexContent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

