import mongoose from 'mongoose';
const schemaCleaner = require('../utils/SchemaCleaner');

 const wSubmissionSchema = mongoose.Schema({
     title: String,
     body: String,
     creator: String,
});

const critiqueSchema = mongoose.Schema({
    critBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    critBody: {
        type:String,
        trim: true,
    },
    rating: {
        type: Number,
        default: 1,
    },
    critiquedAt: {type: Date, default: Date.now}
});


schemaCleaner(wSubmissionSchema);
schemaCleaner(critiqueSchema);
schemaCleaner(replySchema);


module.exports = mongoose.model('Post', postSchema);

