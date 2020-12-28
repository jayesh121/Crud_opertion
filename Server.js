const express = require("express")
const bodyparser = require("body-parser")
require('./Db/conectdb.js')
require('dotenv').config()
const app= express()
app.use(express.json())

const authRouter = require('./Controller/auth.js')

app.use('/api/', authRouter )
const Port = 3000

app.listen(Port,()=>{
    console.log(`console ${Port}`)
})

