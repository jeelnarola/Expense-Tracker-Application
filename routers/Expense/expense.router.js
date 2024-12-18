const {Router} = require('express')
const multer = require('multer')
const {UploadCSV, ExpenseShow, ExpenseUpdate, ExpenDelete} = require('../../controllers/Expense/expense.controller')

const upload = multer({dest:'uplods/'})
const ExRouter =Router()

ExRouter.get('/show',ExpenseShow)
ExRouter.post('/bulk-upload',upload.single('file'),UploadCSV)
ExRouter.patch('/update/:id',ExpenseUpdate)
ExRouter.delete('/delete',ExpenDelete)

module.exports = ExRouter