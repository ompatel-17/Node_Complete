require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParesr = require('body-parser')
const db = require('./db')
const router = require('./routes/userRoute')
const port = 5000

const app = express()
app.use(bodyParesr.json())

app.use('/api', router)


app.listen(port, () => {
    console.log(`SERVER IS LISTENING ON PORT ${port}...`)
})