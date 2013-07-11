var express = require('express')
,search = require(',/search')

//Create app

var app = express.createServer();

//configuration

app.set('view engine', 'ejs');
app.set('view', __dirname + '/views');
app.set('view options', { layout: false });

//routers

app.get('/', function (req, res) {
    res.render('index');
    });

//listen

app.listen(3000);
