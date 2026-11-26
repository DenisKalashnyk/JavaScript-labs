'use strict';

const compose = (...fns) => {
  const handlers = [];

  const composed = (value) => {
    try {
      return fns.reduceRight((result, fn) => fn(result), value);
    } catch (error) {
      handlers.forEach((handler) => {
        handler(error);
      });
      return undefined;
    }
  };

  composed.on = (event, callback) => {
    if (event === 'error') {
      handlers.push(callback);
    }
  };

  return composed;
};

module.exports = { compose };