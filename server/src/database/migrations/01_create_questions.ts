import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('questions', table => {
    table.increments('id').primary();
    table.string('pin');
    table.string('image');
    table.string('title').notNullable();
    table.string('question_a').notNullable();
    table.string('question_b').notNullable();
    table.string('question_x').notNullable();
    table.string('question_y').notNullable();
    table.string('correct_answer').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('questions');
}
