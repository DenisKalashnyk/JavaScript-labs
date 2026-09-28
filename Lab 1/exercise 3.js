"use strict";
const c = [true, 'hello', 5, 12, -200, false, false, 'word', 12, true, 'Ivanka', 'football', 'gym','Billy Herington', true, 2131, 78.3]

let types = {
    number: 0,
    string: 0,
    boolean: 0,
}; 

for(let elements of c) {
   let type = typeof elements 
  
  if (type === 'number'){
  types.number++  
  }
  if (type === 'string'){
  types.string++  
  }
  if (type === 'boolean'){
  types.boolean++  
  }

  }
console.dir(types);
