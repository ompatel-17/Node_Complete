const mongoose = require('mongoose')

mongoose.connect(process.env.URL
).then(() => {
    console.log("CONNECTED SUCCESSFULLY...")
}).catch((error) => {
    res.status(500).json({error : error.message})
})