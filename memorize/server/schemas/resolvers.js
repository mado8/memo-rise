const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../util/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log(context.user, "this is test")
      if (context.user) {
       
        return await User.findOne({ _id: context.user._id });
      }
       throw new AuthenticationError("Must be logged in");

    },
  },
  Mutation: {
    addUser: async (parent, {username, email, password}, context) => {
      const userFound = await User.findOne({username})
      if(userFound) {
        throw new AuthenticationError("Must be logged in");
      }
      const newUser = await User.create({username, email, password});
      const token = signToken(newUser);
      return {token, newUser};
    }
  }

}

module.exports = resolvers;
