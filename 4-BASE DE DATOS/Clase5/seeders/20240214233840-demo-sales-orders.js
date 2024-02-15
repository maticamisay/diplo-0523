"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert(
      "SalesOrders",
      [
        {
          order_date: new Date(),
          total_order: 100.0,
          user_id: 1,
        },
        {
          order_date: new Date(),
          total_order: 150.5,
          user_id: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete("SalesOrders", null, {});
  },
};
