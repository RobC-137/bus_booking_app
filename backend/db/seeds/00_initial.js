const orderedTableNames = require('../../src/constants/orderedTableNames');
const tableNames = require('../../src/constants/tableNames');
const cities = require('../../src/constants/cities');
const Knex = require('knex');

/**
 * @param {Knex} knex 
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all(
    orderedTableNames.map((tableName) => knex(tableName).del())
  )
  await knex(tableNames.cities).insert(cities.map((cityName) => {
    return {
      name: cityName
    }
  }))


};
