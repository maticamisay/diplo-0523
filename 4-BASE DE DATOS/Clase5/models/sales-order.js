"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SalesOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SalesOrder.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  SalesOrder.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      total_order: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users", // nombre de la tabla en la base de datos
          key: "user_id",
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "SalesOrder",
      tableName: "SalesOrders", // Asegúrate de que el nombre de la tabla coincida exactamente con el que quieres
    }
  );
  return SalesOrder;
};
