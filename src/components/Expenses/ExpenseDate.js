import React from 'react';

import './ExpenseDate.css';

// components in react are function with extra twist of the JSX code
const ExpenseDate = (props) => {
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month  = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    return (
        <div className="expense-date">
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    );
    }

export default ExpenseDate;