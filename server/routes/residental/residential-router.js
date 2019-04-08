const residential = require( "./residential-3rd-party-model" );

const residentialRouter = require( "express" ).Router();

/**
 * @api {get} /api/residential Get residential data
 * @apiVersion 1.0.0
 * @apiName GetResidentialData
 * @apiGroup Parcel
 *
 * @apiExample Request example:
 * axios.post('/api/residential');
 *
 * @apiUse Error
 *
 * @apiSuccessExample Residential Data
 * [
 {
        "id": 1,
        "county": "Autauga",
        "state": "AL",
        "seat": "Prattville",
        "population": 55347,
        "sqmi": "594",
        "geoid": 1001,
        "city": null,
        "source_availability": "yes",
        "parcel_availability": "yes",
        "total_cost": "0",
        "tax_cost": "0",
        "parcel_cost": null,
        "table_name": "al_autauga16",
        "total_objects": "36993",
        "last_refresh": "2016-04-04",
        "address_availability": "1",
        "owner_availability": "1",
        "table_updated": "2019-03-25 10:57:18 -0400",
        "path": "/us/al/autauga",
        "ll_schema_version": null
    }...
 ]
 *
 */
residentialRouter.get( "/", ( req, res ) => {
    residential.get3rdPartyData().then( results => {
        res.status( 200 ).json( results );
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { status: 500, message: err.message } );
    } );
    
} );

module.exports = residentialRouter;