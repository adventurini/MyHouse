const database = require( "../../knexConfig" );

const get3rdPartyData = () => {
    return database( "residential_third_party" );
};

const get3rdPartyDataForZipCode = zip => {
    return database( "residential_third_party" ).where( zip );
};

const searchForKeyword = search => {
    const keyword = search.keyword.toUpperCase();
    return database( "residential_third_party" ).
        where( "public_remarks", "like",
            `%${ keyword }%` );
};

const averageForKeyword = async search => {
    const keyword = search.keyword.toUpperCase();
    
    return database( "residential_third_party" ).
        avg( "price_sqr_ft" ).
        avg( "sale_price" ).
        avg( "sqft_est_tot_fin" ).
        where( "public_remarks", "like", `%${ keyword }%` );
};

module.exports = {
    get3rdPartyData,
    get3rdPartyDataForZipCode,
    searchForKeyword,
    averageForKeyword,
};