'use strict';

const sum = (...args) => {
  let result = 0, i = 0;
  if (args.length) {
    do { result += args[i++]; } while (i < args.length);
  }
  return result;
};

module.exports = { sum };
