const { User } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, arg, context) => {
      console.log(context.user, "this is test")
      if (context.user) {
       
        return await User.findOne({ _id: context.user._id });
      }
       throw new AuthenticationError("Must be logged in");

    },
  }

}

module.exports = resolvers;
