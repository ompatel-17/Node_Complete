const mongoose = require('mongoose')

mongoose.connect(process.env.URL
).then(() => {
    console.log("Connected Successfully...")
}).catch((err) => {
    res.status(500).json({message : err.message})
})