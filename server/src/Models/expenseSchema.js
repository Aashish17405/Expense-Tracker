const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    Amount: Number,
    Category: String,
    Date: Date,
    Description: String
})

const expenseModel = mongoose.model('Expense', expenseSchema);

module.exports = expenseModel