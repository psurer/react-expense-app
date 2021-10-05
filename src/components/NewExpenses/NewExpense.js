import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
// here we render form where user can enter expense data

const NewExpense = () => {
    return <div className='new-expense'>
        <ExpenseForm />

    </div>
}

export default NewExpense;