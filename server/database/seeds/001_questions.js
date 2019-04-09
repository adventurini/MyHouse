const csvParser = require( "../csvParser" );
const path = require( "path" );

exports.seed = async function( knex, Promise ) {
    // Inserts seed entries
    const resultaArray = await csvParser(
        path.join( __dirname, "./questions.csv" ) );
    
    return knex( "questions" ).insert( resultaArray );
};
