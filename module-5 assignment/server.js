const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is Home Page\n');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is About Page\n');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is Contact Page\n');
    } else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error writing to file\n');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File written successfully\n');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
});


server.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});
