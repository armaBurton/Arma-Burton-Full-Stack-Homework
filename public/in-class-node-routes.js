// inclass-node-routes.js
const http = require('http');
const port = process.env.PORT || 5001;


const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('We are the munchkins of the lollipop guild');
        res.end();
    } else if (req.url === "/submit") {
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', () => {
            console.log("POST data: " + body);
            res.writeHead(200);
            res.end(postHTML)
        })
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('whatch doin here?')
        res.end()
    }

    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('Node Routing Exercise');
    // res.end();
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})