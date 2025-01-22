var http = require('http');

// Create the server and export it
var app = http.createServer(function (req, res) {
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(1245);
module.exports = app;