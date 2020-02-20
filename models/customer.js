'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    id: { 
      field: 'id', 
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull: true
    },
    image: { 
      field: 'image', 
      type: DataTypes.STRING(1024)
    },
    name: { 
      field: 'name', 
      type: DataTypes.STRING(64)
    },
    userId: { 
      field: 'userId', 
      type: DataTypes.STRING(50)
    },
    birthday: { 
      field: 'birthday', 
      type: DataTypes.STRING(64)
    },
    gender: { 
      field: 'gender', 
      type: DataTypes.STRING(64)
    },
    job: { 
      field: 'job', 
      type: DataTypes.STRING(64)
    },
    createdDate: { 
      field: 'createdDate', 
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('now()'),
    },
    isDeleted: { 
      field: 'isDeleted', 
      type: DataTypes.INTEGER
    }
  }, {
    timestamps : false,
    freezeTableName: true,
    underscored: true,
  });
  customer.associate = function(models) {
    // associations can be defined here
    customer.belongsTo(models.user, {
      foreignKey : 'userId'
    })
  };
  return customer;
};