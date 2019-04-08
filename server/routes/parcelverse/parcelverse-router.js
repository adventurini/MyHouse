const Parcel = require( "./parcel-model" );

const parcelRouter = require( "express" ).Router();

/**
 * @api {get} /api/parcel Get parcel data
 * @apiVersion 1.0.0
 * @apiName GetParcelData
 * @apiGroup Parcel
 *
 * @apiExample Request example:
 * axios.post('/api/parcel');
 *
 * @apiUse Error
 *
 * @apiSuccessExample Parcel Data
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
parcelRouter.get( "/", ( req, res ) => {
    Parcel.getParcel().then( results => {
        res.status( 200 ).json( results );
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { status: 500, message: err.message } );
    } );
    
} );

module.exports = parcelRouter;