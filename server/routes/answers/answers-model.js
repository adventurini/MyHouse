const database = require( "../../knexConfig" );

const getAnswers = () => {
    return database( "answers" );
};

const getAnswerById = id => {
    return database( "answers" ).where( { id } ).first();
};

const getAnswersByQuestionId = question_id => {
    return database( "answers" ).where( { question_id } );
};

const addAnswer = answer => {
    return database( "answers" ).insert( answer );
};

module.exports = {
    getAnswers,
    getAnswerById,
    getAnswersByQuestionId,
    addAnswer,
};