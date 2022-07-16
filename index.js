const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World!~~안녕하세요~~AWS");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const config = require("./config/key");

const mongoose = require("mongoose");

mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("Error", err));
