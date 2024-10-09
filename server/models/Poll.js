const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        default: "Option",
    }
})

const pollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        default: "Choose between options:",
    },
    options: [optionSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
})


const Poll = mongoose.model('poll', pollSchema);
const Options = mongoose.model('option', optionSchema);

module.exports = {
    Poll,
    Options,
}