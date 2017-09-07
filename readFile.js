const fs   = require('fs');
const http = require('http');

var server = http.createServer((req, res) => {
	fs.readFile('./demoFile.file', (err, data) => {
		console.log(data);
		res.end(data);
	});
});

server.listen(3000, () => {
	console.log('listening on port 3000');
});

