'use strict';


const phonebook = [{ name: 'Denys Kalashnyk', phone: '+380873231212' },
  { name: 'Ivanka Ohyr', phone: '+380874321212' },
  { name: 'Oleksandr Chyrva', phone: '+380873865212' },];


const findPhoneByName = (name) => {
  for (const i of phonebook) {
    if (i.name === name)
      return i.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
