const router = require('express').Router();
const passport = require('../services/passport');

router.get('/google', passport.authenticate('google', {
  scope: [ 'profile', 'email' ]
}));

router.get('/google/callback', passport.authenticate('google'));

router.get('/logout', (req, res) => {
  req.logout();
  res.send({ success: true });
});


router.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;