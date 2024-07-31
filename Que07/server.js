const http = require('http');
const port = 8935;

// Create the HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    
    res.statusCode = 200;
    
    res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
