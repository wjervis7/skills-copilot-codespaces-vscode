// create web server
var express = require('express');
var app = express();

// use middleware
app.use(express.static('public'));

// create a route for the app
app.get('/', function(req, res) {
  res.send('Hello World');
});

// create a route for the comments
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

// start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});

// test the server
// go to http://localhost:3000 in browser
// go to http://localhost:3000/comments in browser
// test the server in terminal with curl
// curl http://localhost:3000
// curl http://localhost:3000/comments
// stop the server with ctrl + c