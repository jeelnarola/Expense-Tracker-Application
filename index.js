const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// const DataBase = require('./configs/db')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log("MongoDB connected"))
.catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
});

app.get('/',(req,res)=>{
    res.status({msg:"Welcome To Expense Tracker Application."})
})

// DataBase()
// app.listen(process.env.PORT,()=>{
//     console.log("Server Start :- ",process.env.PORT);
    
// })

module.exports = app