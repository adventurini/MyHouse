exports.up = function( knex, Promise ) {
    return knex.schema.createTable( "parselverse", table => {
        table.increments();
        table.string( "county" );
        table.string( "seat" );
        table.string( "population" );
        table.string( "sqmi" );
        table.string( "geoid" );
        table.string( "city" );
        table.string( "state" );
        table.string( "total_cost" );
        table.string( "tax_cost" );
        table.string( "parcel_cost" );
        table.string( "parcel_availability" );
        table.string( "source_availability" );
        table.string( "table_name" );
        table.string( "total_objects" );
        table.string( "last_refresh" );
        table.string( "address_availability" );
        table.string( "owner_availability" );
        table.string( "table_updated" );
        table.string( "path" );
        table.string( "ll_schema_version" );
    } );
    
};

exports.down = function( knex, Promise ) {

};
