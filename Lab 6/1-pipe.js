'use strict';


const pipe = (...fns) => {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new Error('All arguments must be functions');
  }
  return (x) => fns.reduce((result, fn) => fn(result), x);
};
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f = pipe(inc, twice, cube);
const x = f(5);
console.log(x);



module.exports = { pipe };
