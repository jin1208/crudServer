'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise.all([
      queryInterface.addColumn(
        'user', //alter table name
        'isDeleted' , {
          type: Sequelize.INTEGER
        }),
        queryInterface.addColumn(
          'customer', //alter table name
          'user_id' , {
            type: Sequelize.STRING(50)
          }),
    ]);

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return Promise.all([
      queryInterface.removeColumn(
     'user', //alter table name
     'isDeleted'),
     queryInterface.removeColumn(
      'customer', //alter table name
      'user_id')
   ]);
  }
};
