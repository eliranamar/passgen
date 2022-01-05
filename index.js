#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const createPassword = require('./utils/createPassword');
const savePasswordToFile = require('./utils/savePasswordToFile');

program.version('1.0.0').description('Simple node.js password generator');

/*
 * Add program cmd options
 * https://github.com/tj/commander.js#options
 * */
program
  .option('-l, --length <integer>', 'Length of password', '12')
  .option('-s, --save', 'Save password to passwords.txt')
  .option('-nn, --no-numbers', 'No numbers')
  .option('-ns, --no-symbols', 'No symbols')
  .parse();

const { numbers, symbols, length, save } = program.opts();

// Get generated password
const password = createPassword(parseInt(length, 10), numbers, symbols);

// Save password to passwords.txt file
if (save) {
  savePasswordToFile(password);
}

// Copy password to clipboard
clipboardy.writeSync(password);

console.log(chalk.bold.blueBright('Generated password: ') + chalk.yellowBright(password));
console.log(chalk.bold.red('Copied to clipboard!'));
