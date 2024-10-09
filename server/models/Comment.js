const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    pageType: {
        type: String,
        required: true,
        enum: ['forum', 'poll'],
    },
    pageId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;