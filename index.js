const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// const DataBase = require('./configs/db')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get('/',(req,res)=>{
    res.status({msg:"Welcome To Expense Tracker Application."})
})


    mongoose.connect(process.env.MONGODB_URL)
    console.log(process.env.MONGODB_URL)
    console.log("DataBase Connect");

// DataBase()
// app.listen(process.env.PORT,()=>{
//     console.log("Server Start :- ",process.env.PORT);
    
// })

module.exports = app