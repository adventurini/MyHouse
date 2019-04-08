exports.up = function( knex ) {
    return knex.schema.createTable( "house_answers_bridge",
        house_answers_bridge => {
            
            house_answers_bridge.integer( "house_id" ).
                references( "id" ).
                inTable( "houses" ).
                onDelete( "CASCADE" ).
                onUpdate( "CASCADE" );
            
            house_answers_bridge.integer( "answers_id" ).
                references( "id" ).
                inTable( "answers" ).
                onDelete( "CASCADE" ).
                onUpdate( "CASCADE" );
            
        } );
};

exports.down = function( knex ) {
    return knex.schema.dropTableIfExists( "house_answers_bridge" );
};
  