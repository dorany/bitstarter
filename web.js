fs = require('fs')
var http = require("http");

fs.readFile('index.html', 'utf8', function (err,data) {
    if (err) {
	return console.log(err);
    }
    //    console.log(data);
	
    variable = data;	
    
    var server = http.createServer(function (peticion, respuesta){
	respuesta.end(variable);
    });
    
    
    server.listen(5000, function(){
   	console.log("tu servidor está listo en " + this.address().port);
    }); 
});
