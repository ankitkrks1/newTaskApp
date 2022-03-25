const mongoose = require('mongoose')

const url = process.env.MONGODB_URL

// "mongodb://localhost:27017/newTaskApp"
mongoose.connect(url)

