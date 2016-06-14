'use strict';
module.exports = function(sequelize, DataTypes) {
  var Hours = sequelize.define('Hours', {
    Day: DataTypes.STRING,
    StartHours: DataTypes.STRING,
    EndHours: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Hours;
};