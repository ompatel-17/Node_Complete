const express = require('express')
const router = express.Router()
const Subscriber = require('../model/subscriber')


//Getting all
router.get('/getall', async (req, res) => {
    try {
        const result = await Subscriber.find()
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({error : error.message})
    }

})



//Getting one
router.get('/getbyid/:id', async (req,res) => {
    try {
        const id = req.params.id
        const result = await Subscriber.findById(id)
        res.status(200).json(result) 

    } catch (error) {
        res.status(500).json({error : error.message})
    }

})



//creating one
router.post('/add', async (req, res) => {
    const result = new Subscriber({
        name : req.body.name,
        subscribeToChannel : req.body.subscribeToChannel
    })

    try {
        const data = await result.save()
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({error : error.message})                           
    }

})


//updating one
router.patch('/update/:id', getSubscriber, async (req, res) => {
    if (req.body.name != null)
    {
        res.subscriber.name = req.body.name
    }
    if (req.body.subscribeToChannel != null)
    {
        res.body.subscribeToChannel = req.body.subscribeToChannel
    }

    try {
        const updatedSubscriber = await res.subscriber.save()
        res.status(200).json(updatedSubscriber)
        
    } catch (error) {
        res.status(500).json({error : error.message})
    }



    // try {
    //     const id = req.params.id
    //     await Subscriber.findByIdAndUpdate(id)
    //     const data = result.save()
    //     res.status(200).json(data)
        
    // } catch (error) {
    //     res.status(500).json({error : error.message})
    // }

})


//deleting one
router.delete('/delete/:id', async (req,res) => {

    try {
        const id = req.params.id 
        await Subscriber.findByIdAndRemove(id)
        res.status(200).json({message : "Deleted Successfully..."})
    } catch (error) {
        res.status(500).json({error : error.message})
    }

})

async function getSubscriber(req, res, next) {
    let subscriber

    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber == null)
        {
            return res.status(404).json({message : "Cannot Find Subscriber"})
        }

    } catch (error) {
        return res.status(500).json({error : error.message})
    }

    res.subscriber = subscriber
}



module.exports = router