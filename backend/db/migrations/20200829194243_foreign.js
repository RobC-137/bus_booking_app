const tableNames = require('../../src/constants/tableNames');
const Knex = require('knex');

function references(table, tableName, notNullable = true, columnName = '') {
    const definition = table
        .integer(`${tableName}_id`)
        .unsigned()
        .references('id')
        .inTable(tableName)
        .onDelete('cascade');

    if (notNullable) {
        definition.notNullable();
    }
    return definition;
}

/**
 * @param {Knex} knex 
 */
exports.up = async function (knex) {

    await knex.schema.createTable(tableNames.stops, (table) => {
        table.increments().notNullable();
        references(table, tableNames.cities);
        table.string('name').notNullable();


    });
    await knex.schema.createTable(tableNames.routes_stops, (table) => {
        table.increments().notNullable();
        references(table, tableNames.routes);
        references(table, tableNames.stops);
        table.integer('order').unsigned().notNullable();
    });

    await knex.schema.createTable(tableNames.buses, (table) => {
        table.increments().notNullable();
        table.string('licence_plate');
        references(table, tableNames.buses_models);
    });
    await knex.schema.createTable(tableNames.buses_model_seats, (table) => {
        table.increments().notNullable();
        references(table, tableNames.buses_models);
    });

    await knex.schema.createTable(tableNames.buses_routes, (table => {
        table.increments().notNullable();
        references(table, tableNames.buses);
        references(table, tableNames.routes);
        table.dateTime('init_time').notNullable();
    }));

    await knex.schema.createTable(tableNames.book_seats, (table) => {
        table.increments().notNullable();
        references(table, tableNames.buses_routes);
        table.boolean('booked');
    });
};

/**
 * @param {Knex} knex 
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists(tableNames.routes_stops);
    await knex.schema.dropTableIfExists(tableNames.stops);
    await knex.schema.dropTableIfExists(tableNames.buses_model_seats);
    await knex.schema.dropTableIfExists(tableNames.book_seats);
    await knex.schema.dropTableIfExists(tableNames.buses_routes);
    await knex.schema.dropTableIfExists(tableNames.buses);
};
