'use strict';

const fn = () => {
  const obj1 = { name: 'Один' };
  let obj2 = { name: 'Два' };
  obj1.name = 'Один змінений';
  obj2.name = 'Два змінений';
  const obj3 = { name: 'Три' };
  // const не дозволяє переприсвоїти змінну іншому об'єкту,
  // а let дозволяє змінити посилання на інший об'єкт.
  obj2 = obj3;
};

module.exports = { fn };
