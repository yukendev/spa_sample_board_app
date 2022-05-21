var http = require('http');
var fs = require('fs');

const port = 3000;
const server = http.createServer();

server.on('request', (req, res) => {

  fs.readFile('./index.html', (err, data) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    res.end();
  })

});

server.listen(port);
console.log(`This server is listening on port: ${port}`)