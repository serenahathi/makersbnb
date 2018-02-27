'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Properties', [{
        name: 'Watery willows',
        description: 'An old boarded-up house with a spooky ghost. Enter at your peril.',
        price: 34.50,
        availablefrom: new Date(),
        availableuntil: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lolhost mansions',
        description: 'A sun-soaked villa overlooking the rivers of the Ganges.',
        price: 50.00,
        availablefrom: new Date(),
        availableuntil: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Properties', null, {});

  }
};
