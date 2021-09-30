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
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}/>
    </div>
  );
}

export default App;
