require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const port = process.env.PORT || 5500;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("App is listening on port " + port);
});
