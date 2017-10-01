'use strict'

const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
	const rstream = fs.createReadStream('./demoFile.file');
	console.log(rstream);
	rstream.pipe(res);
});

server.listen(3000, () => {
	console.log('listening on port 3000! i am gonna stream the file');
});
