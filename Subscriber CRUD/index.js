require('dotenv').config()
const express =require('express')
const mongoose = require('mongoose')
app = express()
const router = require('./routes/subscriber')
const db = require('./db')
const port = 6000

app.use(express.json())

app.use('/subscriber', router)

app.listen(port, () => {
    console.log(`SERVER IS LISTENING ON PORT ${port}...`)
})