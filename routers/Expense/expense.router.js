const {Router} = require('express')
const multer = require('multer')
const UploadCSV = require('../../controllers/Expense/expense.controller')
const { required } = require('joi')

const upload = multer({dest:'uplods/'})
const ExRouter =Router()

ExRouter.post('/bulk-upload',upload.single('file'),UploadCSV)

module.exports = ExRouter