const mongoose = require('mongoose')

const url = process.env.MONGODB_URL

// process.env.MONGODB_URL
mongoose.connect(url)

