function Property(){
  this.name = 'hello';
};

module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    availablefrom: DataTypes.DATEONLY,
    availableuntil: DataTypes.DATEONLY,

    createdAt: new Date(),
    updatedAt: new Date(),
  }, {});
  Property.associate = function (models) {
    // associations can be defined here
  };
  return Property;
};
