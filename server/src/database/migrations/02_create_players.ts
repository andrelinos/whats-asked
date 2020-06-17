import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('players', table => {
    table.increments('id').primary();
    table.string('image');
    table.string('name').notNullable();
    table.string('question_a').notNullable();
    table.string('question_b').notNullable();
    table.string('question_x').notNullable();
    table.string('question_y').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('players');
}
