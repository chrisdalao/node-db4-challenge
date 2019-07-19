exports.up = function (knex) {

    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128).notNullable().unique();
        tbl
            .integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('RESTRICT') // what happens if the ingredient is deleted
            .onUpdate('CASCADE'); // what happens if the id of the ingredient changes
    })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128).notNullable();
            tbl.float('ingredient_quantity')
            tbl.string('measurement', 128)
        });
};

exports.down = function (knex) { };
