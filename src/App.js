import React, { useState } from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';
// here we create a new const and the value we assign to the const is an arrow funtion
// () this is for the list of parameters, which we are leaving empty
// here we Initialize our state with some dummy data
const DUMMY_EXPENSES = [
    { 
      id: 'e1',
      title: "rent",
      amount: 3000,
      date: new Date(2021, 1, 1),
    },
    {
      id: 'e2', 
      title: "travel",
      amount: 5000,
      date: new Date(2021, 3, 11),
    },
    {
      id: 'e3',
      title: "car insurance",
      amount: 150,
      date: new Date(2021, 4, 21),
    },
    {
      id: 'e4',
      title: "food",
      amount: 600,
      date: new Date(2021, 1, 16),
    },
  ];
// this function is triggered whenever a new expense is added
// here we receive the   expesne as a parameter 
const App = () => {
  // here we do some destructuring / adding expenses and setExpenses
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
   <div>
     <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses items={expenses} /> 
   </div>
  );
}

export default App;
