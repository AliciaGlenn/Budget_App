const express = require("express");
const budgets = require("./models/budgets.js");

app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Express is listening for requests from the browser");
});
