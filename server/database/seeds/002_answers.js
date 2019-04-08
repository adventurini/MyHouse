exports.seed = function( knex, Promise ) {
    return knex( "answers" ).insert( [
        { answer: "Laminate", "question_id": 1, "amount_diff": 0 },
        { answer: "Granite", "question_id": 1, "amount_diff": 0 },
        { answer: "Quartz", "question_id": 1, "amount_diff": 0 },
        { answer: "Formica", "question_id": 1, "amount_diff": 0 },
        { answer: "0-3 years", "question_id": 2, "amount_diff": 0 },
        { answer: "3-5 years", "question_id": 2, "amount_diff": 0 },
        { answer: "5-9 years", "question_id": 2, "amount_diff": 0 },
        { answer: "10+ years", "question_id": 2, "amount_diff": 0 },
        { answer: "0-3 years", "question_id": 3, "amount_diff": 0 },
        { answer: "3-5 years", "question_id": 3, "amount_diff": 0 },
        { answer: "5-9 years", "question_id": 3, "amount_diff": 0 },
        { answer: "10+ years", "question_id": 3, "amount_diff": 0 },
        { answer: "0-3 years", "question_id": 4, "amount_diff": 0 },
        { answer: "3-5 years", "question_id": 4, "amount_diff": 0 },
        { answer: "5-9 years", "question_id": 4, "amount_diff": 0 },
        { answer: "10+ years", "question_id": 4, "amount_diff": 0 },
    ] );
};
