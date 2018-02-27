'use strict';
module.exports = (sequelize, DataTypes) => {
  var Property = sequelize.define('Property', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    availablefrom: DataTypes.DATEONLY,
    availableuntil: DataTypes.DATEONLY
  }, {});
  Property.associate = function(models) {
    // associations can be defined here
  };
  return Property;
};