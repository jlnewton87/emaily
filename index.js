const express = require('express');
const routes = require('./routes');

const app = express();

routes(app).auth;

const appPort = process.env.PORT || 5000;
app.listen(appPort);
