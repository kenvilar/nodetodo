var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
	var message = 'RESPONDING...';
	html = html.replace('{Response}', message);
	res.end(html);
}).listen(1337, '127.0.0.1');
