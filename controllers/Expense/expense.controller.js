const csv=require('fast-csv');
const validateExpenseData = require('../../utils/Validator');
const Expense = require('../../models/Expense/expense.models');
const UploadCSV = async(req,res)=>{
    const fileRows=[];
    const error=[];
    try {
        csv.parseFile(req.file.path,{headers:true})
        .on('data',(row)=>{
            // validate each row
            const { error } = validateExpenseData(row);
            if(error){
                error.push({row,error:error.message});
            }else{
                fileRows.push(row)
            }
        })
        .on('end',async()=>{
            try {
                const expenses = fileRows.map((row)=>({
                    userId:row.userId,
                    category:row.category,
                    amount:parseFloat(row.amount),
                    description:row.description,
                    date:new Date(row.date),
                    type:row.type
                }))
                await Expense.insertMany(expenses);
                res.status(201).json({message:"Expense UploadedSuccessfully.",error});
            } catch (err) {
                res.status(500).json({message:"Databse Error" , error:err.message})
            }
        })
    } catch (err) {
        console.log("Error In UploadCSV Controller :- ",err.message)
        res.status(400).json({message:'Invalid CSV File :- ',err:error})
    }
}

module.exports = UploadCSV