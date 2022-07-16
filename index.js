const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World!~~안녕하세요~~AWS");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
