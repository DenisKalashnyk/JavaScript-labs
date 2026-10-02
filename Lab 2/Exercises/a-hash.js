'use strict';

const phonebook = {
  Denys: '+380873231212',
  Ivanka: '+380874321212',
  Oleksandr: '+380873865212' };

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
