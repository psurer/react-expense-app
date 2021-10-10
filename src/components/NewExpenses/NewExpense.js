import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
// here we render form where user can enter expense data

const NewExpense = () => {
// here we use the ... spread operator to pull out all the key: value pairs
// so we can add them to this object
// now we use a new id: Math.random, and convert it to a string
    const onSaveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    };

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHanlder} />
        
    </div>
}

export default NewExpense;