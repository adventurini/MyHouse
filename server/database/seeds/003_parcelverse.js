const csvParse = require( "../csvParser" );
const path = require( "path" );

exports.seed = async function( knex, Promise ) {
    // Deletes ALL existing entries
    
    const parcelData = await csvParse(
        path.join( __dirname, "./parcelverse.csv" ) );
    return knex.batchInsert( "parselverse",
        parcelData, 10
    );
    ;
};
