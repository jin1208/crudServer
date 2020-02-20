'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customer', {
      id: { 
        field: 'id', 
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull: true
      },
      image: { 
        field: 'image', 
        type: Sequelize.STRING(1024)
      },
      name: { 
        field: 'name', 
        type: Sequelize.STRING(64)
      },
      birthday: { 
        field: 'birthday', 
        type: Sequelize.STRING(64)
      },
      gender: { 
        field: 'gender', 
        type: Sequelize.STRING(64)
      },
      job: { 
        field: 'job', 
        type: Sequelize.STRING(64)
      },
      createdDate: { 
        field: 'createdDate', 
        type: Sequelize.DATE
      },
      isDeleted: { 
        field: 'isDeleted', 
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customer');
  }
};