'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Modiji International Airport',
        cityId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ahilyadevi International Airport',
        cityId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RajaBhoj International Airport',
        cityId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bhopali International Airport',
        cityId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

  }
};