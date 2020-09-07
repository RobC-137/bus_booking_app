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
    { id: 1, name: 'valparaíso', city: 'valparaíso' },
    { id: 2, name: 'pajaritos', city: 'santiago' },
    { id: 3, name: 'estación central', city: 'santiago' }
  ]).returning('*');

  console.log(created);
};
