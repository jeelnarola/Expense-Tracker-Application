const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get('/',(req,res)=>{
    res.status({msg:"Welcome To Expense Tracker Application."})
})
app.listen(9090,()=>{
    console.log("Server Start")
})

module.exports = app