const Answers = require( "./answers-model" );

const answersRouter = require( "express" ).Router();

/**
 * @api {get} /api/answers Get answers
 * @apiVersion 1.0.0
 * @apiName GetAnswers
 * @apiGroup Answers
 *
 * @apiExample Request example:
 * axios.get('/api/answers');
 *
 * @apiUse Error
 *
 * @apiSuccess {Number} id            Answer ID.
 * @apiSuccess {String} answer        Answer.
 * @apiSuccess {Number} question_id   ID of the question this answer belongs to.
 * @apiSuccess {Number} amount_diff   The amount difference per sq ft.
 * @apiSuccessExample {json} Example:
 *  [
 *      {
            "id": 1,
            "answer": "Garnet",
            "question_id": 1,
            "amount_diff": 30
           
        }...
 ]
 *
 *
 */
answersRouter.get( "/", ( req, res ) => {
    Answers.getAnswers().then( res => {
        res.status( 200 ).json( res.data );
        
    } ).catch( err => {
        
        console.log( err );
        res.status( 500 ).json( { status: 500, message: err.message } );
    } );
    
} );

/**
 * @api {post} /api/answers Create a answer.
 * @apiVersion 1.0.0
 * @apiName CreateAnswers
 * @apiGroup Answers
 *
 * @apiExample Create example:
 * axios.post('/api/answers', {
 *     answer: "Some thing here about the house",
 *     amount_diff: 3000,
 *     question_id: 1
 * });
 *
 * @apiParam {String} answer        The answer to the question
 * @apiParam {Number} amount_diff   Amount diff per sq ft.
 * @apiParam {Number} question_id   ID of the question the answer belongs to.
 *
 * @apiUse Error
 *
 * @apiSuccess {Number} id            Answer ID.
 * @apiSuccess {String} answer        Answer.
 * @apiSuccess {Number} question_id   ID of the question this answer belongs to.
 * @apiSuccess {Number} amount_diff   The amount difference per sq ft.
 * @apiSuccessExample {json} Example:
 *      {
        "id": 1,
        "answer": "Garnet",
        "question_id": 1,
        "amount_diff": 30
    }
 *
 *
 */
answersRouter.post( "/", ( req, res ) => {
    const answer = req.body;
    if ( !answer || !answer.answer || !answer.question_id ||
        !answer.amount_diff ) {
        res.status( 400 ).json( {
            message: "You must attach all of the answer fields to the body" +
                         " of this request."
        } );
        return;
    }
    
    Answers.addAnswer( answer ).then( async ids => {
        if ( ids[ 0 ] ) {
            const answer = await Answers.getAnswerById( ids[ 0 ] );
            if ( answer ) {
                res.status( 201 ).json( answer );
            } else {
                res.status( 500 ).json( {
                    message: "A error occurred while trying to insert the" +
                                 " answer into the database."
                } );
            }
        }
    } ).catch( err => {
        console.log( err );
        res.status( 500 ).json( { message: err.message } );
    } );
    
} );

module.exports = answersRouter;