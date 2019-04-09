const Homes = require( "./home-model" );

const housesRouter = require( "express" ).Router();

/**
 * @api {get} /api/houses Get houses
 * @apiVersion 1.0.0
 * @apiName GetHouses
 * @apiGroup Houses
 *
 * @apiExample Request example:
 * axios.get('/api/houses');
 *
 * @apiUse Error
 *
 * @apiSuccessExample Parcel Data
 * {
 *
 * }
 *
 */
housesRouter.get( "/", ( req, res ) => {
    Homes.getHouses().then( results => {
        res.status( 200 ).json( results );
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { status: 500, message: err.message } );
    } );
    
} );

/**
 * @api {post} /api/houses Create houses
 * @apiVersion 1.0.0
 * @apiName CreateHouses
 * @apiGroup Houses
 *
 * @apiExample Request example:
 * axios.post('/api/houses', {
 *      address: "Some address",
 *      year_made: 1999,
 *      year_remodel: 2000,
 *      sq_ft: 3000,
 *      sq_ft_est_lower_floor: 2000,
 *      sq_ft_est_abv_grn: 1500,
 * });
 *
 * @apiParam {String} address                       The address of the house.
 * @apiParam {Number} year_made                     Year the house was made.
 * @apiParam {Number} [year_remodel]                Year the house was
 *     remodeled.
 * @apiParam {Number} sq_ft                         Sq footage of the house.
 * @apiParam {Number} [sq_ft_est_lower_level]       Sq footage of the lower
 *     level.
 * @apiParam {Number} [sq_ft_est_abv_grd]           Sq footage above ground.
 * @apiParam {Number} [sq_ft_est_basement]          Sq footage of the basement.
 * @apiParam {Number} lot_size                      Sq footage of the lot.
 * @apiParam {Number} street_number                 Street Number.
 * @apiParam {String} street_name                   Name of the street.
 * @apiParam {String} street_suffix                 Street suffix.
 * @apiParam {String} city                          City.
 * @apiParam {String} county                        County.
 * @apiParam {Number} zip                           5 digit zip code.
 * @apiParam {Number} beds                          Number of bedrooms.
 * @apiParam {Number} baths                         Number of bathrooms.
 * @apiParam {String} [architecture_level]
 * @apiParam {String} [architecture_style]
 * @apiParam {String} [basement_type]
 * @apiParam {String} [exterior_features]
 * @apiParam {String} [garage_features]
 * @apiParam {String} [garage_size]
 * @apiParam {String} [garage_dimensions]
 * @apiParam {String} [heating]
 * @apiParam {String} [pool]
 * @apiParam {String} [public_remarks]
 * @apiParam {String} [porch_type]
 *
 * @apiUse Error
 *
 * @apiSuccessExample House Data
 * {
 *
 * }
 *
 */
housesRouter.post( "/", ( req, res ) => {

} );

module.exports = housesRouter;