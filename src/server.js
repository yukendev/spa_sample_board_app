var http = require('http');
var fs = require('fs');

const port = 3000;
const server = http.createServer();

server.on('request', (req, res) => {

  let url = req.url;
  if (url === '/') {
    fs.readFile('./index.html','UTF-8',(error,data)=>{
      res.writeHead(200, {'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  } 
  else if (url === '/index.js') {
    fs.readFile('./index.js','UTF-8',(error,data)=>{
      res.writeHead(200, {'Content-Type':'text/plain'});
      res.write(data);
      res.end();
    });
  }

});

server.listen(port);
console.log(`This server is listening on port: ${port}`)