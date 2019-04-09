const db = require( "../knexConfig" );
const express = require( "express" );
const path = require( "path" );
const questionsRouter = require( "./questions/questioins-router" );
const answersRouter = require( "./answers/answers-router" );
const parcelRouter = require( "./parcelverse/parcelverse-router" );
const residentialRouter = require( "./residental/residential-router" );
const housesRouter = require( "./house/houses-router" );

const apiDocsPath = path.join( __dirname, "../apidoc" );

module.exports = server => {
    server.use( "/api/questions", questionsRouter );
    server.use( "/api/answers", answersRouter );
    server.use( "/api/parcel", parcelRouter );
    server.use( "/api/residential", residentialRouter );
    server.use( "/api/houses", housesRouter );
    server.use( "/", express.static( apiDocsPath ) );
};

const errors = { // J.Pinkman Dynamic error messaging based on sqlite codes 
    "1":  "We ran into an error, yo! I dunno!",
    "4":  "Operation aborted, yo!",
    "9":  "Operation aborted, yo!",
    "19": "Another record with that value exists, yo!"
};

// Routes

