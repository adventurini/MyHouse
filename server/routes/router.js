// const axios = require('axios');
// const bcrypt = require('bcryptjs');
const db = require('../knexConfig');
// const jwt = require('jsonwebtoken');
// const jwtSecret = process.env.JWT_SECRET || 'add a .env file to root of project with the JWT_SECRET variable';
 
// const { authenticate } = require('../auth/authenticate');

module.exports = server => {
//   server.post('/api/register', register);
//   server.post('/api/login', login);
//   server.get('/api/jokes', getJokes);
};

const errors = { // J.Pinkman Dynamic error messaging based on sqlite codes 
  '1': 'We ran into an error, yo! I dunno!',
  '4': 'Operation aborted, yo!',
  '9': 'Operation aborted, yo!',
  '19': 'Another record with that value exists, yo!'
};


// Routes

