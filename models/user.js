module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define(
        'user', //create table name
        {
        userId: { 
            field: 'userId', 
            type: DataTypes.STRING(50), 
            unique: true, 
            allowNull: false 
        },
        password: { 
            field: 'password', 
            type: DataTypes.STRING(30), 
            allowNull: false 
        },
        comment: {
            field: 'comment', 
            type: DataTypes.TEXT,
            allowNull: true,
        },
        createdDate: {
            field: 'createdDate', 
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('now()'),
        },
        isDeleted: {
            field: 'isDeleted', 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
      timestamps : false,
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true,
  
      // define the table's name
      //tableName: 'user'
    });

    user.associate = function(models) {
        user.hasMany(models.customer);
    };
  
    return user;
  };