const http = require('http'); const server = http.createServer((req, res) => { res.end('Hello World'); }); server.listen(3003, () => console.log('Test server running on port 3003'));
