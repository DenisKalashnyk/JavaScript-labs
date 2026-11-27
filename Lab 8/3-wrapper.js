'use strict';

const contract = (fn, ...types) => {
  return (...args) => {
    const argTypes = types.slice(0, types.length - 1);
    const resultType = types[types.length - 1];

    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] !== argTypes[i].name.toLowerCase()) {
        throw new TypeError('Invalid argument type');
      }
    }

    const result = fn(...args);

    if (typeof result !== resultType.name.toLowerCase()) {
      throw new TypeError('Invalid result type');
    }

    return result;
  };
};


module.exports = { contract };
