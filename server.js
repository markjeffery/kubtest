require("appdynamics").profile({
  controllerHostName: 'se-demo-uk.demo.appdynamics.com',
  controllerPort: 80, 
  accountName: 'customer1',
  accountAccessKey: '322e0fe1-11b0-4d5a-9a01-e674c656e089',
  applicationName: 'kubtest',
  tierName: 'node', 
  nodeName: 'process', 
 });
var http = require('http');
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello and welcome to my World!');
};
var www = http.createServer(handleRequest);
www.listen(8080);
