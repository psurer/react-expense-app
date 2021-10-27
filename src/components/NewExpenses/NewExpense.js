import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
// here we render form where user can enter expense data 
// and we render the ExpenseForm conditionally, in some cases we show a button

const NewExpense = (props) => {
// here we use the ... spread operator to pull out all the key: value pairs
// so we can add them to this object
// now we use a new id: Math.random, and convert it to a string
    const saveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
         <div className='new-expense'>
            <button>Add New Expense</button>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} />

    </div>
    );
}

export default NewExpense;