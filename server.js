console.log('Node server started')


const express = require('express');
const bodyParser= require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
    console.log('listening on 3000')
})

/*app.get('/', function(req, res) {    //app.get(path, callback)  path->path of the GET request   callback-> tells server what to do when path is matched
    res.send('Hello World')
})*/

app.get('/', function(req, res) {
    res.sendFile('/Project/final-year-project' + '/index.html') //sendFile method to send a file to the browser
})

app.post('/sentences', function(req, res) {
    console.log(req.body)
})