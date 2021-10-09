const { AuthenticationError } = require('apollo-server-express');
const { User, Report } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('reports');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('reports');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { reportId }) => {
      return Thought.findOne({ _id: reportId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('reports');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addThought: async (parent, { reportText }, context) => {
      if (context.user) {
        const thought = await Report.create({
          reportText,
          reportAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reports: report._id } }
        );

        return report;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { reportId, commentText }, context) => {
      if (context.user) {
        return Report.findOneAndUpdate(
          { _id: reportId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeThought: async (parent, { reportId }, context) => {
      if (context.user) {
        const report = await Report.findOneAndDelete({
          _id: reportId,
          reportAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { reports: report._id } }
        );

        return report;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { reportId, commentId }, context) => {
      if (context.user) {
        return Report.findOneAndUpdate(
          { _id: reportId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
