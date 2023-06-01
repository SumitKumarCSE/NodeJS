// Implement a NodeJS server that returns the current data and time when a client makes a GET request to the '/datetime' endpoint.
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/datetime' && req.method === 'GET') {
        const currentData = new Date().toUTCString();
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Current date and time: ${currentDate}`);
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});