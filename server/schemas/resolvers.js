const User = require('../models');
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

    }
  },
  Mutation: {
    addUser: async (parent, {userData: {username, email, password}}, context) => {
      
      const newUser = await User.create({username, email, password});

      if(!newUser) {
        throw new AuthenticationError("Username taken. Please choose another username.");
      }
      console.log(newUser)
      const token = signToken(newUser);
      console.log(token)

      return {token, user: newUser};
    },
    addMemory: async (parent, {memoryData: {title, description}}, {username}) => {
      if(!username) {
        throw new AuthenticationError("User not found.");
      }
      const createMemory = User.findOneAndUpdate({username},
        {
          $addToSet: {
            memories: { title, description },
          },
        },)
      return createMemory
    },
  },
};

module.exports = resolvers;
