exports.up = function(knex) {
    return knex.schema.createTable('houses', house => {
    
        house
            .increments();

        house
            .string('address', 255)
            .notNullable()
            .unique();

        house
            .integer('year_made')
            .notNullable();

        house
            .integer('sq_ft')
            .notNullable();

        house
            .integer('lot_size')
            .notNullable();

    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('houses');
};
  