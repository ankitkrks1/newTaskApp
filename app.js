const express = require('express')
const Task = require('./Db/Model/Task')
require('./Db/mongoose')
const taskRouter = require('./Router/task')
const cors = require('cors')

const app = express()
const port = process.env.PORT;

app.use(cors())

app.use(express.json())
app.use(taskRouter)

app.listen(port,()=>{
    console.log(`Server is Running in Port ${port}`)
})