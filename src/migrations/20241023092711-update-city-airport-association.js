'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */


    await queryInterface.addConstraint('Airports',{
      type: 'foreign key',
      fields: ['cityId'],
      name: 'city_fk_constraint',
      references: {
        table: 'Cities',
        field: 'id'
      },
      onDelete: 'cascade',
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeConstraint('Airports','city_fk_constraint');
  }
};



/* 
* Query to check if the constarint has been appliad or not
SELECT * FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE WHERE TABLE_NAME = 'Airports';
*/