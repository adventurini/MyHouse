exports.up = function(knex) {
    return knex.schema.createTable('house_answers_bridge', house_answers_bridge => {
    
        house_answers_bridge
            .integer('house_id')

        house_answers_bridge
            .integer('answers_id')

    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('house_answers_bridge');
};
  