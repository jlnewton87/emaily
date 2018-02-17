const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const routes = require('./routes');
const keys = require('./config/keys');
const db = require('./config/db');
require('./models/user');

mongoose.connect(db.getConnectionString());

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

routes(app).auth;

const appPort = process.env.PORT || 5000;
app.listen(appPort);
