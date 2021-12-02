const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
const longlat =require('./server/latitudeAndLongitudeDistance')
const {exec} = require("child_process")
const app = express()


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
  exec("./travel2.0", (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    
});
})

app.post('/Traveling_Salesman', function(req,res){
  //fs.writeFileSync(path.join(__dirname, "public", "list.json"), JSON.stringify(req.body), { encoding: 'utf8' })
  // call func to formate dist between city
  fs.writeFileSync(path.join(__dirname, "public", "list.json"), longlat(req.body), { encoding: 'utf8' })
  
  //res.sendFile( path.join(__dirname, "public", "index.html" ));
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})