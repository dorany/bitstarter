fs = require('fs')
var express = require('express');

var app = express.createServer(express.logger());

fs.readFile('index.html', 'utf8', function (err,data) {
    if (err) {
	return console.log(err);
    }
    //    console.log(data);
	
    variable = data;	
	
	app.get('/', function(request, response) {
  	response.send(variable);
	});

	var port = process.env.PORT || 5000;
	app.listen(port, function() {
  	console.log("Listening on " + port);
});
   

 
//    var server = http.createServer(function (peticion, respuesta){
//	respuesta.end(variable);
//    });
//    
//    
//    server.listen(5000, function(){
//   	console.log("tu servidor está listo en " + this.address().port);
//    }); 
});
