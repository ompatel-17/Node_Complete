require('dotenv').config()
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
port = 8000
const router = require('./routes/courses')
const db = require('./db')


app.use('/api', router)
app.use(express.urlencoded({extended : false}))
// app.use(express.json())
app.use(bodyparser.json())


app.listen(port, () => {
    console.log(`SERVER IS LISTENING ON ${port}`)
})