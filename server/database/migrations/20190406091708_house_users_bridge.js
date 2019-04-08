exports.up = function(knex) {
    return knex.schema.createTable('house_users_bridge', house_users_bridge => {

        house_users_bridge
            .integer('house_id')
            .references('id')
            .inTable('houses')
            .onDelete('CASCADE')
            .onUpdate("CASCADE");

        house_users_bridge
            .integer('users_id')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate("CASCADE");


    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('house_users_bridge');
};
  