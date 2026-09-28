"use strict";

const incobj = (n) => {
    n.n += 1;
}
const obj = { n: 10 };
const e = incobj(obj)
console.dir(obj)