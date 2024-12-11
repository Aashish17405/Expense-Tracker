const { addExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/controller')
const express = require('express');
const router = express.Router();

router.post('/add-expense', addExpense);
router.get('/get-expenses', getExpenses);
router.put('/update-expense', updateExpense);
router.delete('/delete-expense', deleteExpense);

module.exports = router