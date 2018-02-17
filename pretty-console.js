const Figlet = require("figlet");
const Promise = require("bluebird");
const chalk = require("chalk");

const figlet = Promise.promisify(Figlet);

const showArt = port => {
  figlet("Emaily")
    .then(data => {
      console.log(chalk.cyan(data));
      console.log(chalk.yellow(`Server running on ${port}...`))
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = showArt;
