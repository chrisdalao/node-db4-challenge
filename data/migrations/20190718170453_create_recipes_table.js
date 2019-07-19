
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
      tbl.integer('servings').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes');
};
