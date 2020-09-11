const tableNames = require('../../src/constants/tableNames');
const Knex = require('knex');

/**
 * @param {Knex} knex 
 */
exports.up = async function (knex) {

    await knex.schema.createTable(tableNames.cities, (table) => {
        table.increments().notNullable();
        table.string('name').notNullable();
    });


    await knex.schema.createTable(tableNames.routes, (table) => {
        table.increments().notNullable();
        table.string('name').notNullable();

    })

    await knex.schema.createTable(tableNames.buses_models, (table) => {
        table.increments().notNullable();
        table.string('manufacturer');
        table.integer('seats').notNullable();
        table.integer('floors').notNullable();
    });


};

/**
 * @param {Knex} knex 
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists(tableNames.cities);
    await knex.schema.dropTableIfExists(tableNames.routes);
    await knex.schema.dropTableIfExists(tableNames.buses_models);
};
