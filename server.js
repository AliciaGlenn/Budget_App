const express = require("express");

app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Express is listening for requests from the browser");
});
