module.exports = () => {
  return process.env.NODE_ENV === 'production'
  ? sendProdKeys()
  : sendDevKeys();
}

const sendProdKeys = () => {
  return require('prod');
};
const sendDevKeys = () => {
  return require('./dev');
};