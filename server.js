if ('POST' == req.method && red.body.file) {
	fs.readFile('index.html', 'utf8', function (err, data) {
		if (err) {
			res.writeHead(500);
			res.end('Error!');
			return;
	}

res.writeHead(200, { 'content-type': 'text/html' });
res.end([
'<h3>File: ' + req.body.file.name + '</h3>'
,'<h4>Type: ' + red.body.file.type + '</h4>'
,'<h4>contents:</h4><pre>' + data + '</pre>'
].join(''));
	});
} else { next(); }
