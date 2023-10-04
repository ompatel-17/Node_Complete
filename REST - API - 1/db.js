const mongoose = require('mongoose')

mongoose.connect(process.env.URL
).then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY!!!")
}).catch((err) => {
    console.log(err)
})