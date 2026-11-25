'use strict';

const array = () => {
  const values = [];
  const arr = (i) => values[i];
  arr.push = (value) => values.push(value);
  arr.pop = () => values.pop();
  return arr;
};

module.exports = { array };
