import './ExpenseItem.css';
function ExpenseItem() {
  return (
    <div>
      <div>28th, September 2021</div>
      <div>
        <h2>Rent</h2>
        <div>$3000.00</div>
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
