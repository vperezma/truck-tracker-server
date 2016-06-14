'use strict';
module.exports = function(sequelize, DataTypes) {
  var Menu_Items = sequelize.define('Menu_Items', {
    Item: DataTypes.STRING,
    Price: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Menu_Items;
};