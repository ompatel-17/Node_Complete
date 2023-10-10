const express = require('express')
const router = express.Router()
const Subscriber = require('../model/subscriber')


//Getting all
router.get('/getall', async (req, res) => {
    try {
        const result = await Subscriber.find()
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({message : error.message})
    }

})



//Getting one
router.get('/getbyid/:id', async (req,res) => {
    try {
        const id = req.params.id
        const result = await Subscriber.findById(id)
        res.status(200).json(result) 

    } catch (error) {
        res.status(500).json({message : error.message})
    }

})



//creating one
router.post('/add', async (req, res) => {
     try {
        const result = await Subscriber.create(req.body)
        result.save()
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({message : error.message})                           
    }

})


//updating one
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id
        const subscriber = await Subscriber.findByIdAndUpdate(id, req.body)
        if(!subscriber)
        {
            return res.status(404).json({message : `Cannot find any product with ID ${id}`})
        }
        const updatedSubscriber = await Subscriber.findById(id)
        res.status(200).json(updatedSubscriber)
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})


//deleting one
router.delete('/delete/:id', async (req,res) => {

    try {
        const id = req.params.id 
        const subscriber = await Subscriber.findByIdAndDelete(id)
        if(!subscriber)
        {
            return res.status(404).json({message : `Cannot find any product with id ${id}`})
        }
        res.status(200).json({message : "Deleted Successfully..."})
    } catch (error) {
        res.status(500).json({error : error.message})
    }

})

// async function getSubscriber(req, res, next) {
//     let subscriber

//     try {
//         subscriber = await Subscriber.findById(req.params.id)
//         if(subscriber == null)
//         {
//             return res.status(404).json({message : "Cannot Find Subscriber"})
//         }

//     } catch (error) {
//         return res.status(500).json({error : error.message})
//     }

//     res.subscriber = subscriber
// }



module.exports = router