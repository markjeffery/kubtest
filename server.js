var os = require("os");
var hostname = os.hostname();
var appdControllerHostname = process.env.APPDYNAMICS_CONTROLLER_HOST_NAME;
var appdControllerPort = process.env.APPDYNAMICS_CONTROLLER_PORT;
var appdAccountName = process.env.APPDYNAMICS_AGENT_ACCOUNT_NAME;
var appdAccountAccessKey = process.env.APPDYNAMICS_AGENT_ACCOUNT_ACCESS_KEY;
var appdAgentApplicationName = process.env.APPDYNAMICS_AGENT_APPLICATION_NAME;
var appdAgentTierName = process.env.APPDYNAMICS_AGENT_TIER_NAME;
var externalWebService = process.env.EXTERNAL_WEBSERVICE;
var mode   = process.env.NODE_ENV;
require("appdynamics").profile({
  controllerHostName: appdControllerHostname,
  controllerPort: appdControllerPort, 
  debug: true,
  accountName: appdAccountName,
  accountAccessKey: appdAccountAccessKey,
  applicationName: appdAgentApplicationName,
  tierName: appdAgentTierName, 
  nodeName: hostname, 
 });
var http = require('http');
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello and welcome to my World!, calling ' + externalWebService);
  var request = require('request');
  var http = require('http');
  var datafromdemosim;
  http.request(externalWebService, function(res) {
    res.setEncoding('utf8');

    res.on('data', function(data)
    {
      console.log('BODY: ' + data.length + ' bytes of data');
      datafromdemosim = data;
    });

    res.on('end', function()
    {
      console.log("Demosim done")
    });
  }).end();
};
var www = http.createServer(handleRequest);
www.listen(8080);
