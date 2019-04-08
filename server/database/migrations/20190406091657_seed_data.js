exports.up = function(knex) {
    return knex.schema.createTable('seed_data', seed_data => {
    
        seed_data
            .increments();

        seed_data
            .string('public_remarks', 255);

        seed_data
            .integer('house_id')
            .references("id")
            .inTable("houses")
            .onDelete("CASCADE")
            .onUpdate("cascade")
            .notNullable();

    });
};
  


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('seed_data');
};
  