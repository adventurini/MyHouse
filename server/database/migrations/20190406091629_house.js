exports.up = function( knex ) {
    return knex.schema.createTable( "houses", house => {
        
        house.increments();
        house.integer( "year_made" ).notNullable();
        house.integer( "year_remodel" );
        house.integer( "sq_ft" ).notNullable();
        house.integer( "sq_ft_est_lower_floor" );
        house.integer( "sq_ft_est_abv_grd" );
        house.integer( "sq_ft_est_basement" );
        house.integer( "lot_size" ).notNullable();
        house.integer( "street_number" ).notNullable();
        house.string( "street_name" ).notNullable();
        house.string( "street_suffix" ).notNullable();
        house.string( "city" ).notNullable();
        house.string( "county" ).notNullable();
        house.integer( "zip" ).notNullable();
        house.float( "beds" ).notNullable();
        house.float( "baths" ).notNullable();
        house.string( "architecture_level" );
        house.string( "architecture_style" );
        house.string( "basement_type" );
        house.string( "exterior_features" );
        house.string( "garage_features" );
        house.string( "garage_size" );
        house.string( "garage_dimensions" );
        house.string( "heating" );
        house.boolean( "pool" );
        house.text( "public_remarks" );
        house.string( "porch_type" );
        
    } );
};

exports.down = function( knex ) {
    return knex.schema.dropTableIfExists( "houses" );
};
  