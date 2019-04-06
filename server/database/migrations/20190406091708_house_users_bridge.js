exports.up = function(knex) {
    return knex.schema.createTable('house_users_bridge', house_users_bridge => {

        house_users_bridge
            .integer('house_id')

        house_users_bridge
            .integer('users_id')


    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('house_users_bridge');
};
  