const database = require( "../../knexConfig" );

const getQuestions = () => {
    return database( "questions" );
};

const getQuestion = ( id ) => {
    return database( "questions" ).where( { id} ).first();
};

const addQuestion = ( questions ) => {
    return database( "questions" ).insert( questions );
};

module.exports = {
    getQuestions,
    getQuestion,
    addQuestion,
};