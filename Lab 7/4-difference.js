'use strict';



const difference = (array1, array2) => {
  const result = array1.filter(item => !array2.includes(item));
  return result;
};

module.exports = { difference };
