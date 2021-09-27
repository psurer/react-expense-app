import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      title: "rent",
      amount: 3000,
      date: new Date(2021, 1, 1),
    },
    {
      title: "travel",
      amount: 5000,
      date: new Date(2021, 3, 11),
    },
    {
      title: "car insurance",
      amount: 150,
      date: new Date(2021, 4, 21),
    },
    {
      title: "food",
      amount: 600,
      date: new Date(2021, 1, 16),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount}
      date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
