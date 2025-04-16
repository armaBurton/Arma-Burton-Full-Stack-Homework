const http = require("http");
const port = process.env.PORT || 5000;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
  // const routes = [
  //   "welcome",
  //   "redirect",
  //   "redirected",
  //   "cache",
  //   "cookie",
  //   "other",
  // ];
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // console.log(req.url);
  if (req.url === "/welcome") {
    console.log("req.url: ", req.url);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Welcome to the jungle, we've got fun and games!",
      })
    );
  } else if (req.url === "/redirect") {
    res.writeHead(302, { location: "/redirected" });
    res.end();
  } else if (req.url === "/redirected") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "You have been redirected!" }));
  } else if (req.url === "/cache") {
    res.writeHead(200, {
      "content-type": "application/json",
      "cache-control": "max-age=86400",
    });
    res.end(JSON.stringify({ message: "This resource was cached." }));
  } else if (req.url === "/cookie") {
    res.writeHead(200, {
      "content-type": "application/json",
      "Set-Cookie": "hello=world",
    });
    res.end(JSON.stringify({ message: "cookies...yummm" }));
  } else if (req.url === "other") {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 - page not found");
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "404 Not Found" }));
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/public/`);
});
