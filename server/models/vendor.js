'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vendor = sequelize.define('Vendor', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
      },
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