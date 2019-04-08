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
            "price_sqr_ft": "$ 99",
            "sale_price": 181000,
            "list_price": 179900,
            "90_day_before_sale_zestimate": "$255,000",
            "price_sq_ftfor_keywords": "$155",
            "close_data": "08/22/2018",
            "street_number": 3266,
            "street_name": "HARVARD",
            "street_suffix": "Road",
            "city": "Royal Oak",
            "county": "Oakland",
            "zip": 48073,
            "beds_total": 3,
            "baths_lavs": 1.1,
            "est_fin_abv_grd_sft": 1824,
            "acreage": 0.25,
            "architecture_level": "1 Story",
            "architecture_\tstyle": "Ranch",
            "price_sq_ft": "$ 99",
            "basement_type": null,
            "exterior": "Other",
            "cooling": null,
            "exterior_features": "Fenced",
            "garage_dimensions": null,
            "garage_features": "Attached, Direct Access",
            "garage_size": "1 Car",
            "heating": "Forced Air",
            "original_list_price": 199900,
            "photo_count": 2,
            "pool": "FALSE",
            "public_remarks": "HANDYMAN INVESTOR SPECIAL!   EXTRA LARGE LOT - 80 FEET WIDE!  PRICED TO SELL!  GREAT NEIGHBORHOOD IN NORTH ROYAL OAK. COME MAKE THIS YOUR OWN.",
            "avg": "$197",
            "count": 154,
            "without": "$196",
            "sqft_est_tot_fin": "1,910",
            "sqft_est_fin_lower_floor": "700",
            "sqft-est_fin_abv_grd": "1,210",
            "sqft_est_tot_bsmt": "800",
            "year_built": 1949,
            "year_remodeled": "2015",
            "porch_type": "Deck"
        },
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

/**
 * @api {get} /api/residential/zip Get residential data by zip code
 * @apiVersion 1.0.0
 * @apiName GetResidentialDataByZip
 * @apiGroup Parcel
 *
 * @apiExample Request example:
 * axios.post('/api/residential/zip', {zip: 80920});
 *
 * @apiParam {Number} zip       Residential zip code.
 *
 * @apiUse Error
 *
 * @apiSuccessExample Residential Data
 * [
 {
            "price_sqr_ft": "$ 99",
            "sale_price": 181000,
            "list_price": 179900,
            "90_day_before_sale_zestimate": "$255,000",
            "price_sq_ftfor_keywords": "$155",
            "close_data": "08/22/2018",
            "street_number": 3266,
            "street_name": "HARVARD",
            "street_suffix": "Road",
            "city": "Royal Oak",
            "county": "Oakland",
            "zip": 48073,
            "beds_total": 3,
            "baths_lavs": 1.1,
            "est_fin_abv_grd_sft": 1824,
            "acreage": 0.25,
            "architecture_level": "1 Story",
            "architecture_\tstyle": "Ranch",
            "price_sq_ft": "$ 99",
            "basement_type": null,
            "exterior": "Other",
            "cooling": null,
            "exterior_features": "Fenced",
            "garage_dimensions": null,
            "garage_features": "Attached, Direct Access",
            "garage_size": "1 Car",
            "heating": "Forced Air",
            "original_list_price": 199900,
            "photo_count": 2,
            "pool": "FALSE",
            "public_remarks": "HANDYMAN INVESTOR SPECIAL!   EXTRA LARGE LOT - 80 FEET WIDE!  PRICED TO SELL!  GREAT NEIGHBORHOOD IN NORTH ROYAL OAK. COME MAKE THIS YOUR OWN.",
            "avg": "$197",
            "count": 154,
            "without": "$196",
            "sqft_est_tot_fin": "1,910",
            "sqft_est_fin_lower_floor": "700",
            "sqft-est_fin_abv_grd": "1,210",
            "sqft_est_tot_bsmt": "800",
            "year_built": 1949,
            "year_remodeled": "2015",
            "porch_type": "Deck"
        },
 ]
 *
 */
residentialRouter.get( "/zip", ( req, res ) => {
    
    const zip = req.body;
    if ( !zip ) {
        res.status( 400 ).json( {
            message: "Please include a zip code in your request."
        } );
    }
    
    residential.get3rdPartyDataForZipCode( zip ).then( results => {
        res.status( 200 ).json( results );
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { status: 500, message: err.message } );
    } );
    
} );

/**
 * @api {post} /api/residential/search Search by keyword
 * @apiVersion 1.0.0
 * @apiName GetResidentialDataByZipAndKeyword
 * @apiGroup Parcel
 *
 * @apiExample Request example:
 * axios.post('/api/residential/zip', {keyword: "granite"});
 *
 * @apiParam {String} keyword   Keyword to look for in public remarks.
 *
 * @apiUse Error
 *
 * @apiSuccessExample Residential Data
 * [
 {
            "price_sqr_ft": "$ 99",
            "sale_price": 181000,
            "list_price": 179900,
            "90_day_before_sale_zestimate": "$255,000",
            "price_sq_ftfor_keywords": "$155",
            "close_data": "08/22/2018",
            "street_number": 3266,
            "street_name": "HARVARD",
            "street_suffix": "Road",
            "city": "Royal Oak",
            "county": "Oakland",
            "zip": 48073,
            "beds_total": 3,
            "baths_lavs": 1.1,
            "est_fin_abv_grd_sft": 1824,
            "acreage": 0.25,
            "architecture_level": "1 Story",
            "architecture_\tstyle": "Ranch",
            "price_sq_ft": "$ 99",
            "basement_type": null,
            "exterior": "Other",
            "cooling": null,
            "exterior_features": "Fenced",
            "garage_dimensions": null,
            "garage_features": "Attached, Direct Access",
            "garage_size": "1 Car",
            "heating": "Forced Air",
            "original_list_price": 199900,
            "photo_count": 2,
            "pool": "FALSE",
            "public_remarks": "HANDYMAN INVESTOR SPECIAL!   EXTRA LARGE LOT - 80 FEET WIDE!  PRICED TO SELL!  GREAT NEIGHBORHOOD IN NORTH ROYAL OAK. COME MAKE THIS YOUR OWN.",
            "avg": "$197",
            "count": 154,
            "without": "$196",
            "sqft_est_tot_fin": "1,910",
            "sqft_est_fin_lower_floor": "700",
            "sqft-est_fin_abv_grd": "1,210",
            "sqft_est_tot_bsmt": "800",
            "year_built": 1949,
            "year_remodeled": "2015",
            "porch_type": "Deck"
        }...
 ]
 *
 */
residentialRouter.post( "/search", ( req, res ) => {
    
    const search = req.body;
    if ( !search || !search.keyword ) {
        res.status( 400 ).json( {
            message: "Please include a zip code and keyword in your request."
        } );
    }
    
    residential.searchForKeyword( search ).then( results => {
        res.status( 200 ).json( results );
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { status: 500, message: err.message } );
    } );
    
} );

module.exports = residentialRouter;