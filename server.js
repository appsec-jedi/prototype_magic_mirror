var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use('/public', express.static('public'));  // serve files from public

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/views/index.html'));
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log('server listening on port:', server.address().port);
});
