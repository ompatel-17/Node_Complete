const mongoose = require('mongoose')

mongoose.connect(process.env.URL
).then(() => {
    console.log("CONNECTED SUCCESSFULLY...")
}).catch((error) => {
    res.status(500).json({message : error.message})
})