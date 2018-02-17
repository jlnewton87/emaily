const express = require("express");
const app = express();
const appPort = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.send({
    name: "josh"
  })
);

app.listen(appPort);
