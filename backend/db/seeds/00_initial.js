const orderedTableNames = require('../../src/constants/orderedTableNames');
const tableNames = require('../../src/constants/tableNames');
const Knex = require('knex');

/**
 * @param {Knex} knex 
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all(
    orderedTableNames.map((tableName) => knex(tableName).del())
  )

  const created = await knex(tableNames.stops).insert([
    { name: 'valparaíso', city: 'valparaíso' },
    { name: 'pajaritos', city: 'santiago' },
    { name: 'estación central', city: 'santiago' }
  ]).returning('*');

  console.log(created);
};
