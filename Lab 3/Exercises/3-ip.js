'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip.split('.').map(Number).reduce((sum, num, idx) => sum + (num << (24 - idx * 8)), 0);

module.exports = { ipToInt };
