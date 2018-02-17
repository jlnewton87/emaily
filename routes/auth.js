const app = require('express')();
const passport = require('../services/passport');

app.get('/google', passport.authenticate('google', {
  scope: [ 'profile', 'email' ]
}));

app.get('/google/callback', passport.authenticate('google'));

app.get('/logout', (req, res) => {
  req.logout();
  res.send({ success: true });
});


app.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = app;