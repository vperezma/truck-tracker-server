'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vendor = sequelize.define('Vendor', {
    Name: DataTypes.STRING,
    Cards: DataTypes.BOOLEAN,
    Latitude: DataTypes.DECIMAL,
    Longitude: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Vendor;
};