const express = require("express");
const budgets = require("./models/budget.js");

app = express();

app.get("/", (req, res) => {
  res.render("index.ejs", {
    allBudgets: budgets,
  });
});

app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/:id", (req, res) => {
  res.render("show.ejs", {
    //second param must be an object
    budget: budgets[req.params.id], //there will be a variable available inside the ejs file called budget, its value is budget[req.params.id]
  });
});

app.listen(3000, () => {
  console.log("Express is listening for requests from the browser");
});
