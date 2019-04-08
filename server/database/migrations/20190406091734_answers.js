exports.up = function(knex) {
    return knex.schema.createTable('answers', answers => {
    
        answers
            .increments();

        answers
            .string('answer', 255)
            .notNullable()

        answers
            .integer('question_id')
            .notNullable();

        answers
            .integer('amount_diff')
            .notNullable();

    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('answers');
};
  