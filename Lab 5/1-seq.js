'use strict';
const seq = (...a) =>
(x) => x.call ? seq(...a, x) : a.reduceRight((r, f) => f(r), x);

module.exports = { seq };
