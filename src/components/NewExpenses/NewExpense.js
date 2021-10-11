import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
// here we render form where user can enter expense data

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

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} />

    </div>
}

export default NewExpense;