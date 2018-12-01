'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    item: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL
  }, {timestamps: false});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};