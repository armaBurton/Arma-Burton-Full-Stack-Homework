const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5002;

const allowed = ["http://localhost:5500", "http://127.0.0.1:5500"];

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

app.use(express.json());
// http://localhost:5002/form should return a form with input elements for username, email, and submit button

// http://localhost:5002/submit should return all the data the user entered

app.get("/form", (req, res) => {
  res.send(`
    <form action="/submit" method="post">
      <fieldset>
        <legend>Submit Form</legend>

        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required>

        <label for="email">email:</label>
        <input type="email" name="email" id="email" required>

      </fieldset>
      <div id="buttons">
        <button type="submit" id="submit">Submit</button>
      </div>
    </form>
    `);
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
  res.send("submitted");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
