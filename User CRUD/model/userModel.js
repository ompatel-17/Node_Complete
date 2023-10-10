const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
}) 

userSchema.pre("save", async function(next) {
    const user = this

    if(!user.isModified("password")) return next()
    try {
        const hashPassword = await bcrypt.hash(user.password)
        user.password = hashPassword
        next()
    } catch (error) {
        return next()
        //res.status(500).json({error : error.message})
    }
})

module.exports = mongoose.model('user', userSchema)