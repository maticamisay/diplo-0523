"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("SalesOrders", "createdAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date(),
    });
    await queryInterface.addColumn("SalesOrders", "updatedAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("SalesOrders", "createdAt");
    await queryInterface.removeColumn("SalesOrders", "updatedAt");
  },
};
