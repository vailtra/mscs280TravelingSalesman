const express = require('express')
const path = require('path')

const app = express()

app.use(express.static( 'public'));

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/index.htm', function (req, res) {
  res.sendFile( __dirname + "/" + "index.htm" );
})

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})