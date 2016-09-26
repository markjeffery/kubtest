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
  debug: false,
  accountName: appdAccountName,
  accountAccessKey: appdAccountAccessKey,
  applicationName: appdAgentApplicationName,
  tierName: appdAgentTierName, 
  nodeName: hostname, 
 });


var express = require('express'),
    jsdom = require('jsdom'),
    request = require('request'),
    url = require('url'),
    employees = require('./routes/employees'),
    app = express(),
    http = require('http');


app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/employees', employees.findAll);
app.get('/employees/:id', employees.findById);



//The following does not work and we're going to have fun with this one!!!!'
app.get('/weather', function(req, res){

    var outputText = '<H1>Weather</H1>';
    var weatherResult = "The function runs async - that's why...";
    var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=716f8bdc119843c7e88b7ada22d5d7c3'

    request(weatherURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); // Show the HTML for the page.
            weatherResult = body;
        } else
        {     weatherResult = '<H1>No Weather</H1>'; 
        }
    });

    console.log(weatherResult);
    res.write(outputText)
    res.end();

})


app.get('/realweather', function(req, res) {
    
    //var location = 'London';
    var location = req.query.geo;
    if (!location)
    {
        location = 'Bracknell';
    }
    var weather;

    var httpAddress = externalWebService;
    http.request(httpAddress, function(response) {

        //log('HEADERS: ' + JSON.stringify(res.headers));
        response.setEncoding('utf8');

        response.on('data', function (chunk) 
        {
            console.log('BODY: ' + chunk);
            weather = chunk
        });

        response.on('end', function() 
        {

            var backbutton = '<button onclick=\"goBack()\">Go Back</button><script>function goBack() {     window.history.back();  }  </script>';            
            res.send(backbutton + '<BR><BR>The weather in ' + location + ' is <BR><BR>' + weather); 
            console.log('Weather done!')
        });

    }).end();
}) 


app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});