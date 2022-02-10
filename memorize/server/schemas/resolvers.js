const { User } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User
    }
  },

}

module.exports = resolvers;
