const Questions = require( "./questions-model" );
const Answers = require( "../answers/answers-model" );

const questionsRouter = require( "express" ).Router();

/**
 * @api {get} /api/questions Get questions
 * @apiVersion 1.0.0
 * @apiName GetQuestions
 * @apiGroup Questions
 *
 * @apiExample Request example:
 * axios.post('/api/questions');
 *
 * @apiUse Error
 *
 * @apiSuccess {Number} id              Question ID.
 * @apiSuccess {String} questions       Question.
 * @apiSuccess {Array} answers          Question options.
 * @apiSuccessExample {json} Example:
 *  [
 *  {
            "id": 1,
            "questions": "What kind of food does your fridge have in it?",
            "answers": [{
                "id: 1,
                "answers": "Meat mostly",
                "question_id": '1",
                "amount_diff": "30"
                
            }...
            ]
        }...
 ]
 *
 *
 */
questionsRouter.get( "/", ( req, res ) => {
    Questions.getQuestions().then( results => {
        const promises = [];
        for ( let i = 0; i < results.length; i++ ) {
            promises.push( Answers.getAnswersByQuestionId( results[ i ].id ) );
        }
        
        Promise.all( promises ).then( promiseResults => {
            for ( let i = 0; i < promiseResults.length; i++ ) {
                results[ i ].answers = promiseResults[ i ];
            }
            
            res.status( 200 ).json( results );
            
        } ).catch( err => {
            console.log( err );
            res.status( 500 ).json( {
                message: "Somthing went wrong collecting" +
                             " the answers for the" +
                             " questions"
            } );
        } );
        
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { status: 500, message: err.message } );
    } );
    
} );

/**
 * @api {post} /api/questions Create a question
 * @apiVersion 1.0.0
 * @apiName CreateQuestions
 * @apiGroup Questions
 *
 * @apiExample Post example:
 * axios.post('/api/questions', {
 *     question: "What did the duck ask the rooster?"
 * });
 *
 *
 * @apiParam {String} question          The question to be added.
 *
 * @apiUse Error
 *
 * @apiSuccess {Number} id              Question ID.
 * @apiSuccess {String} questions       Question.
 * @apiSuccessExample {json} Example:
 *
 *  {
            "id": 1,
            "questions": "What kind of food does your fridge have in it?",
    }
 *
 *
 */
questionsRouter.post( "/", ( req, res ) => {
    const question = req.body;
    if ( !question ) {
        res.status( 400 ).json( {
            message: "You must attach a question to the" +
                         " body of your request."
        } );
        return;
    }
    
    Questions.addQuestion( question ).then( async ids => {
        if ( ids[ 0 ] ) {
            const question = await Questions.getQuestion( ids[ 0 ] );
            if ( question ) {
                res.status( 201 ).json( question );
            } else {
                res.status( 500 ).json( {
                    message: "Something went wrong when" +
                                 " trying to add the" +
                                 " question."
                } );
            }
        }
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { message: err.message } );
    } );
    
} );

module.exports = questionsRouter;