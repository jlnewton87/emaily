const Figlet = require("figlet");
const Promise = require("bluebird");
const chalk = require("chalk");

const figlet = Promise.promisify(Figlet);

const showArt = port => {
  const { cyan, yellow } = chalk;
  figlet("Emaily")
    .then(data => {
      console.log(cyan(data));
      console.log(yellow(`Server running on ${port}...`))
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = showArt;
