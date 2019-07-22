var express = require('express');
var app = express();

// setup ports
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8443;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '192.168.174.129';

app.get('/', function(req, res) {

	res.end('Hello Node.js!');

});

// server listens in on port
app.listen(server_port, server_ip_address, function () {
	 console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
});
