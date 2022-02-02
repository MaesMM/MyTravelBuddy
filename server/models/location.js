'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Owner,{foreignKey: "owner_id"})
      this.belongsTo(models.User,{foreignKey: "location_id"})
    }
  };
  Location.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude:  {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude:  {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    rate:  {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
    },
    social_media: {
      type: DataTypes.STRING,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Location',
    tableName: 'locations',
  });
  return Location;
};