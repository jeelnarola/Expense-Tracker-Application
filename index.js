const express = require('express')
const cors = require('cors')
const DataBase = require('./configs/db')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get('/',(req,res)=>{
    res.status({msg:"Welcome To Expense Tracker Application."})
})

app.listen(process.env.PORT,()=>{
    console.log("Server Start :- ",process.env.PORT);
    DataBase()
})

module.exports = app