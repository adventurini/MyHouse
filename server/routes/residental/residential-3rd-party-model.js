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
        andWhere( "public_remarks", "like",
            `%${ keyword }%` );
};

module.exports = {
    get3rdPartyData,
    get3rdPartyDataForZipCode,
    searchForKeyword,
};