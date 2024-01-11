const mongoose = require("mongoose");
const codeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("code",codeSchema)