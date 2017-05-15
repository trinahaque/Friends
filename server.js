var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var bp = require('body-parser');
var root = __dirname;
console.log(root);

var app = express();
// mongoose.connect(process.env.MONGOLAB_URI);

app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, './bower_components')));

app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// var port = process.env.PORT || 8000;
app.listen(8000, function(){
  console.log('Listening to full Friends on port', 8000);
})
