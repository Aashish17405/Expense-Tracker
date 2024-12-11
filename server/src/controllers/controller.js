const Expense = require('../Models/expenseSchema')

const addExpense = async (req, res) => {
    try{
        const { Amount,Category,Date,Description } = req.body;
        console.log(typeof(Amount))
        const newExpense = new Expense({Amount,Category,Date,Description});
        await newExpense.save();
        res.status(200).json({ message:'Expense added succesfully' })
    }catch(e){
        console.log('Server error:'+e);
        res.status(500).json({ message:'Sever error' })
    }
}

const getExpenses = async (req,res) => {
    try{
        const expenses = await Expense.find({});
        res.status(200).json(expenses);
    }catch(e){
        console.log('Server Error: '+e);
        res.status(500).json({ message: "Server error" });
    }
}

const updateExpense = async (req, res) => {
    try {
        const { id, Amount } = req.body;
        const updatedExpense = await Expense.findByIdAndUpdate(
            id,
            { $set: { Amount: Amount } },
            { new: true }
        );
        if (!updatedExpense) {
            console.log('Expense was not found');
            return res.status(404).json({ message: "Expense with the given ID not found" });
        }
        return res.status(200).json({ message: "Updated the expense successfully" });
    } catch (e) {
        console.log('Server error: ' + e);
        return res.status(500).json({ message: "Server error" });
    }
};


const deleteExpense = async (req,res) => {
    try{
        console.log(req.body)
        const id = req.body.id;
        const deletedExpense = await Expense.findByIdAndDelete({_id:id});
        if(!deletedExpense){
            res.status(404).json({message:"No expense found"})
        }
        res.status(200).json({message:"Expense deleted succesfully"})
    }catch(e){
        console.log('Server error: '+e);
        res.status(500).json({message:"Server error"})
    }
}

module.exports = {
    addExpense,
    getExpenses,
    updateExpense,
    deleteExpense
}