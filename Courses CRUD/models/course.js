const { text } = require('body-parser')
const mongoose = require('mongoose')

const Course = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    videos : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('courses', Course)