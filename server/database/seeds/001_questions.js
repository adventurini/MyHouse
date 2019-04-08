exports.seed = function( knex, Promise ) {
    // Inserts seed entries
    return knex( "questions" ).insert( [
        { question: "What type of counter tops do you have installed?" },
        { question: "How old is your roof?" },
        { question: "How old is your furnace?" },
        { question: "How old is your AC?" },
    ] );
};
