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

    },
    // allResults: async () => {
      
    //   return User.find({}).populate('memories').populate({
    //     path: 'memories',
    //     populate: 'questions'
    //   });
    // },

    // }

    
  },
  Mutation: {
    addUser: async (parent, { userData: { username, email, password } }, context) => {

      const newUser = await User.create({ username, email, password });

      if (!newUser) {
        throw new AuthenticationError("Username taken. Please choose another username.");
      }
      console.log(newUser)
      const token = signToken(newUser);
      console.log(token)

      return { token, user: newUser };
    },
    addMemory: async (parent, { memoryData: { title, description } }, { user }) => {

      // const findMemorybyID = User.findOne({username: 'myself'})
      // console.log(findMemorybyID)
      const { username } = user;


      if (!username) {
        throw new AuthenticationError("User not found.");
      }
      const createMemory = User.findOneAndUpdate({ username },
        {
          $addToSet: {
            memories: { title, description },
          },
        })
      return createMemory
    },
    
    addQuestion: async (parent, { questionData: { title, answer } }, { MemoryID }) => {
      if (!MemoryID) {
        throw new AuthenticationError("MemoryID not found.");
      }
      const createMemory = User.findOneAndUpdate({ MemoryID },
        {
          $addToSet: {
            savedQuestion: { title, answer },
          },
        })
    },
    removeMemory: async (parent, { memoryID }, context) => {
      const findMemory = Memory.findOne(memoryID)
      if (!findMemory) {
        throw new AuthenticationError("Memory not found")
      }
      let removedMemory = Memory.findOneAndDelete({ "MemoryID": memoryID })
      return removedMemory
    },

    // //login user
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });

    //   if (!user) {
    //     throw new AuthenticationError('No user with this email found!');
    //   }

    //   const correctPw = await user.isCorrectPassword(password);

    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect password!');
    //   }

    //   const token = signToken(user);
    //   return { token, user };
    // },
 

  },
};

module.exports = resolvers;
