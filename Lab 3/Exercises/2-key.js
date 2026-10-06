'use strict';

const generateKey = (length, psbl) => {
  let res = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * psbl.length);
    const character = psbl[index];
    res += character;
  }
  return res;
};

module.exports = { generateKey };
