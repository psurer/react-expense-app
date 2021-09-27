import './ExpenseItem.css';
function ExpenseItem() {
  // using builtin date consturctor that comes with JS 
  // here we create dummy data
  const expenseDate = new Date(2021, 9, 28);
  const expenseTitle = 'rent';
  const expenseAmount = 3000.00;

  return (
    //we use className because class is a reserved word in JS 
    // here we replace hardcoded data with opening and closing curly braces
    <div className="expense-item">
      <div>28th, September 2021</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">$3000.00</div>
      </div>
      </div>
  );
  //components are functions that return HTML code
  //here we write html code that nicely displays info for date etc
  // One root element per return statement if you do this:
  // return <div>Date</div><div><h2>Title</h2><div>Ammount</div></div> <h2>Expense item!</h2>
  // it will give error
  // the way to get around that is to wrap everything in a div 
        // now we can hve multiple elements that can also be side by side
}

// we must export it so it is usable outside the file
export default ExpenseItem;
