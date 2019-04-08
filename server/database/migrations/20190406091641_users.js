exports.up = function(knex) {
    return knex.schema.createTable('users', user => {
    
        user
            .increments();

        user
            .string('username', 255)
            .notNullable()
            .unique();

        user
            .string('password', 255)
            .notNullable()
        
        user
            .string('email', 255)
            .notNullable()
            .unique();

    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
  