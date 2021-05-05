
import mongoose from ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const schemaCleaner = require('../utils/schemaCleaner');

const competitionSchema = new mongoose.Schema(
  {
    CompetitionName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subscribedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    artistCount: {
      type: Number,
      default: 1,
    },
  });

subredditSchema.plugin(uniqueValidator);

// replaces _id with id, convert id to string from ObjectID and deletes __v
schemaCleaner(subredditSchema);

module.exports = mongoose.model('Subreddit', subredditSchema);