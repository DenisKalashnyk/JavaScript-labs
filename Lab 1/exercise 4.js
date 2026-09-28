"use strict";

const c = [true, 'hello', 5, 12, -200, false, false, 'word', 12, true, 'ivanka', 'football', 'gym','Billy Herington', true, 2131, 78.3]
const types = {}

for(let elements of c){
  let type = typeof elements;
  let count = types[type] || 0;
  types[type] = count + 1;
}
console.dir(types);