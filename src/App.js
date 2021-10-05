import React from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from './components/Expenses/Expenses';
// here we create a new const and the value we assign to the const is an arrow funtion
// () this is for the list of parameters, which we are leaving empty
const App = () => {
  const expenses = [
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

  return (
   <div>
     <NewExpense/>
     <Expenses items={expenses} /> 
   </div>
  );
}

export default App;
