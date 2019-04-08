const database = require( "../../knexConfig" );

const get3rdPartyData = () => {
    return database( "residential_third_party" );
};

module.exports = {
    get3rdPartyData,
};