exports.up = function(knex) {
    return knex.schema.createTable('regional_data', regional_data => {
    
        regional_data
            .increments();

        regional_data
            .integer('region_id')
            .notNullable();

        regional_data
            .integer('sq_ft_low')
            .notNullable();

        regional_data
            .integer('sq_ft_avg')
            .notNullable();

        regional_data
            .integer('sq_ft_high')
            .notNullable();

        regional_data
            .integer('answers_id')
            .notNullable();

    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('regional_data');
};
  