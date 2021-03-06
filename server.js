var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var app = express();
var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/routes')(app);
var clusterpoint = require('./server/config/clusterpoint');


app.listen(config.port);
console.log('listening on port ' + config.port + '...');
// test insert
//clusterpoint.insert(1,'willy');