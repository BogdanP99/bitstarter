var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var data;
var fileName = "index.html";

data = fs.readFileSync(fileName, "utf8");

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(data);
  console.log("Listening on " + port);
});
