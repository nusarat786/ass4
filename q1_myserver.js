var http = require("http");
http.createServer(function (request, response) {
 
 response.writeHead(200, {'Content-Type': 'text/plain'});
 
 response.end('THIS IS SERVER\n');
 response.end('Hello World\n');

}).listen(8086);


console.log('Server running at http://127.0.0.1:8086/');
