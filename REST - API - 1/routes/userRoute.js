const express = require('express')
const user = require('../model/userModel')
// const { signup } = require('../controller/userController')
const router = express.Router()

router.post('/user/signup', async (req,res) => {
    try {
        const result = new user(req.body)
        const savedata = await result.save()
        res.status(200).json(savedata)

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})




module.exports = router