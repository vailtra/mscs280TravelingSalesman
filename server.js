const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
const longlat =require('./server/latitudeAndLongitudeDistance')
const {exec} = require("child_process")
const app = express()

const travel = 'travel'
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json())

app.use(express.static( 'public'));

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/test', function (req, res) {
  
  res.send("test")
  let executable = `./${travel}`
  exec("start travel", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
})

app.post('/Traveling_Salesman', function(req,res){
  //fs.writeFileSync(path.join(__dirname, "public", "list.json"), JSON.stringify(req.body), { encoding: 'utf8' })
  // call func to formate dist between city
  longlat(req.body)
  
  res.sendFile( path.join(__dirname, "public", "index.html" ));
})

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})