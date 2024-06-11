// Create web server
// Create a web server that listens to incoming requests and responds with a file that contains the comments.
// The server should listen on port 3000.
// If the file does not exist, the server should respond with a status code of 404.
// If the file exists, the server should respond with a status code of 200.
// If an error occurs while reading the file, the server should respond with a status code of 500.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'comments.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end();
      } else {
        res.writeHead(500);
        res.end();
      }
    } else {
      res.writeHead(200);
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});