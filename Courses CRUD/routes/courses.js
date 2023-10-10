const express = require('express')
const router = express.Router()
const Course = require('../models/course')

// CREATING ROUTES

// GET ALL COURSEWS
router.get('/course/getall', async (req, res) => {
    try {
        const courses = await Course.find()
        res.status(200).json(courses)

    } catch (error) {
        res.status(500).json({message : message.error})
    }
})

// GET SINGLE COURSE
router.get('/course/getbyid/:id', async (req, res) => {
    try {
        const id = req.params.id
        const courses = await Course.findById(id)
        res.status(200).json(courses)

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

// CREAT COURSE
router.post('/course/add', async (req, res) => {
    try {
        const result = await Course.create(req.body)
        result.save()
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

// UPDATE COURSE
router.put('/course/update/:id', async (req, res) => {
    try {
        id = req.params.id
        data = req.body
        const options = {new : true}
        const result = await Course.findOneAndUpdate(id, data, options)
        //const updatedCourse = await Course.findById(id)
        res.status(200).json(result)


    } catch (error) {
        res.status(500).json({message : error.message})


    }

    // try {
    //     id = req.params.id
    //     data = req.body
    //     const options = {new : true}
    //     const result = await Student.findByIdAndUpdate(id, data, options)
    //     res.status(200).json(result)
        
    // } catch (error) {
    //     res.status(500).json({error : error.message})
    // }
})

// DELETE COURSE
router.delete('/course/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await Course.findByIdAndRemove(id)
        res.status(200).json({message : "DELETED SUCCESSFULLY..."})


    } catch (error) {
        res.status(500).json({message : error.message})

    }
})

module.exports = router