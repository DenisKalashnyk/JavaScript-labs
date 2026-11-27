'use strict';

const unique = (array) => {
  const result = array.filter((item, index) => array.indexOf(item) === index);
  return result;
};

module.exports = { unique };
