const mongoose = require ('mongoose')
const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    age : {
        required : true,
        type : Number,
    },

})

module.exports = mongoose.model('student', schema)