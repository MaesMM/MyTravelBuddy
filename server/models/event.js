"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Location, { foreignKey: "location_id" });
    }
  }
  Event.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      rate: {
        type: DataTypes.FLOAT,
      },
      start_datetime: {
        type: DataTypes.STRING,
      },
      end_datetime: {
        type: DataTypes.STRING,
      },
      permanent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Event",
      tableName: "events",
    }
  );
  return Event;
};
