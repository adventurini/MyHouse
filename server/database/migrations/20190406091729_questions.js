exports.up = function(knex) {
    return knex.schema.createTable('questions', questions => {
    
        questions
            .increments();

        questions
            .string('questions', 255)
            .notNullable();

    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('questions');
};
  