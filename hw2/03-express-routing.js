// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const port = process.env.PORT || 5000;

const routes = [
  "welcome",
  "redirect",
  "redirected",
  "cache",
  "cookie",
  "other",
];

const allowed = ["http://localhost:5500", "http://127.0.0.1:5500"];

app.use(cookieParser());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowed.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error("Not Allowed by CORS."));
      }
    },
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html" });
  res.send("Express Routing Exercise");
});

app.get("/welcome", (req, res) => {
  res
    .status(200)
    .set({ "Content-Type": "text/html" })
    .send(
      "Welcome to Lake Wobegon, where all the women are strong, all the men are good-looking, and all the children are above average."
    );
});

app.get("/redirect", (req, res) => {
  res.redirect(302, "/redirected");
});

app.get("/redirected", (req, res) => {
  res
    .status(200)
    .set({ "Content-Type": "text/html" })
    .send("You have been redirected, I hope you're not lost...");
});

app.get("/cache", (req, res) => {
  res.set("Cache-Control", "public, max-age=86400");
  res.send("This resource is cached for 1 day.");
});

app.get("/cookie", (req, res) => {
  res.cookie("hello", "world", {
    maxAge: 86400 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  res.redirect("/get-cookie");
});

app.get("/get-cookie", (req, res) => {
  res
    .set({ "Content-Type": "text/html" })
    .send(`Cookies...yum: ${JSON.stringify(req.cookies)}`);
});

app.get("/other", (req, res) => {
  res
    .status(404)
    .set({ "Content-Type": "text/html" })
    .send("404 - Page Not Found");
});

// Add your code here

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
