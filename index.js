const express = require("express");
const prettyConsole = require("./pretty-console");
const app = express();
const appPort = 5000;

app.get("/", (req, res) =>
  res.send({
    hi: "there"
  })
);

app.listen(appPort);
prettyConsole(appPort);
