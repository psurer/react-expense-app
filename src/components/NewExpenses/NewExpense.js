import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
// here we render form where user can enter expense data
// and we render the ExpenseForm conditionally, in some cases we show a button
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  // here we use the ... spread operator to pull out all the key: value pairs
  // so we can add them to this object
  // now we use a new id: Math.random, and convert it to a string
  const saveExpenseDataHanlder = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  // this function will be triggered when the button is clicked
  // which will lead to the form showing up
  // setIsEditing will be set to true when the button is clicked
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  // here we check if isEditing is false, then we show the button
  // next we check if isEditing is true, in which case we show the form
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHanlder}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
