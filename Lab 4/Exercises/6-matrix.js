'use strict';

const max = (matrix) => {
  let n = matrix[0][0];

  for (const row of matrix) {
    for (const cell of row) {
      const currentValue = cell;
      if (n < currentValue) {
        n = currentValue;
      }
    }
  }

  return n;
};

module.exports = { max };
