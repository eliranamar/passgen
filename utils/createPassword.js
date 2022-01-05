const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

const generatePassword = (length, chars) => {

  let password = '';

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
};

const createPassword = (length, hasNumbers, hasSymbols) => {

  const l = parseInt(length, 10);

  if (!Number.isInteger(l)) {
    throw new Error('Length must be an integer');
  }

  let chars = alpha;

  if (hasNumbers) {
    chars += numbers;
  }
  if (hasSymbols) {
    chars += symbols;
  }

  return generatePassword(length, chars);

};

module.exports = createPassword;
