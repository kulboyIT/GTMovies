
exports.up = function(knex) {
  return knex.schema
  
  .createTable('movies', function (table) {
    table.increments('id').primary();
    table.string('title', 255).notNullable()
    table.string('gender', 255).notNullable()
    table.string('picture', 255).notNullable()
    table.string('language', 255).notNullable()
    table.string('movieCode', 255).notNullable()
  })

  .createTable('users', function(table) {
    table.increments('id').primary();
    table.string('name', 255).notNullable()
    table.string('email', 255).notNullable()
    table.string('password', 255).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('movies')
    .dropTable('users')
  
};

exports.config = { transaction: false };