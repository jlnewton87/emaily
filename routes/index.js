module.exports = (app) => {
  return {
    auth: require('./auth')(app)
  };
};