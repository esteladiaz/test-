var http = require("http");

http.createServer(function (request, response) {
    // send HTTP header
    // HTTP status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // send response body as "hw"
    response.end('Hello World\n');
}).listen(8081);

// say server is running
console.log('Server running at http://127.0.0.1:8081/');
