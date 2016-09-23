var os = require("os");
var hostname = os.hostname();
require("appdynamics").profile({
  controllerHostName: '10.0.0.1',
  controllerPort: 8090, 
  accountName: 'customer1',
  accountAccessKey: '8d59389c-2bb9-4fc1-b495-90016f453d8c',
  applicationName: 'kubtest',
  tierName: 'node', 
  nodeName: hostname, 
 });
var http = require('http');
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello and welcome to my World!');
};
var www = http.createServer(handleRequest);
www.listen(8080);
