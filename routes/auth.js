const passport = require('../services/passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: [ 'profile', 'email' ]
  }));

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send({ success: true });
  });


  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};