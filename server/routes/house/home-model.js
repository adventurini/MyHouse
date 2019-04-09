const database = require( "../../knexConfig" );

const getHouses = async () => {
    
    return database( "houses" );
};

const addHouse = house => {
    return database( "houses" ).insert( house );
};

module.exports = {
    getHouses,
    addHouse,
};