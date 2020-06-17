import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('games', table => {
    table.increments('id').primary();
    table.string('host_id').notNullable();
    table.string('pin').notNullable();
    table.string('players').notNullable();
    table.string('time').notNullable();
    table.string('scores').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('games');
}
