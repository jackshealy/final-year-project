console.log('Node server started');
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-method-override')('method_override_param_name'));
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1/fyp');

//The code below stores the sentence entered by the user in a MongoDB collection as a JSON object.
//Due to time constraints this could not be taken any further so was left out for future work.

/*var Schema = mongoose.Schema;

var sentenceSchema = new Schema({
   sentence: String
});

var SentenceModel = mongoose.model('sentences', sentenceSchema);

app.post('/sentence', function(req,res){
    new SentenceModel({
       sentence: req.body.sentence
    }).save(function(err, doc){
        if(err)res.json(err);
        else res.redirect('/#/build');
    });

});

app.get('/displaySentences', function(req, res) {
    // console.log(req.body);
    SentenceModel.find(function(err,data){
        res.send(data);
    });

});*/

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile('index.html'); //sendFile method to send a file to the browser
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log('listening on ' + port);
});


