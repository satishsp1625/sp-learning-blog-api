const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        minlength: 3,
        maxlength: 100
    },
    description: {
        type: String,
        required:true,
        minlength: 3,
        maxlength: 5000
    },
    category: {
        type: String,
        required:true,
        minlength: 3,
        maxlength: 50
    }
})

module.exports = new mongoose.model("Article", ArticleSchema)