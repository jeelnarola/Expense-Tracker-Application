const express = require('express')
const cors = require('cors')
const DataBase = require('./configs/db')
const AuthRouter = require('./routers/Auth/auth.router')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

app.get('/',(req,res)=>{
    res.send({msg:"Welcome To Expense Tracker Application"})
})

app.use('/api/auth',AuthRouter)
app.listen(process.env.PORT,()=>{
    console.log("Server Start");
    DataBase()
})