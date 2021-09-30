// import ExpenseDate from './components/ExpenseDate';
import Expenses from './components/Expenses';

function App() {
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
     <h2>Let's Get Started!</h2>
     
     <Expenses items={expenses} /> 
   </div>
  );
}

export default App;
