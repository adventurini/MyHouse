const database = require( "../../knexConfig" );

const getParcel = () => {
    return database( "parcelverse" );
};

module.exports = {
    getParcel,
};