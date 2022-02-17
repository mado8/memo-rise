const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ( { req } ) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;
    console.log('---line 11----')
    console.log(token)

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    console.log('---line 18----')
    console.log(token)

    if (!token) {
      // return res.status(400).json({ message: 'You have no token!' });
      return req
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      // create a user field in the req
      req.user = data;
    } catch {
      console.log('Invalid token');
      // return res.status(400).json({ message: 'invalid token!' });
     
    }

    // send to next endpoint 
    // return request object
    return req
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
