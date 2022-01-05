const fs = require('fs');
const os = require('os');
const path = require('path');
const chalk = require('chalk');

const savePasswordToFile = (password) => {

  fs.appendFile(
    path.join(__dirname, '../', 'passwords.txt'),
    password + os.EOL,
    () => { console.log(chalk.green('Password saved to passwords.txt')); }
  );

};

module.exports = savePasswordToFile;
