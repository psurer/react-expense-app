import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
//here we say that props, is the object that holds the values we get for
// the attributes on our custom element
// we get key - value pairs that is passed in by react automatically
function ExpenseItem(props) {
  // using builtin date consturctor that comes with JS 
  return (
    //we use className because class is a reserved word in JS 
    // here we replace hardcoded data with opening and closing curly braces
    // built in method .toISOString is avail on all date objects to output as string
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      </div>
  );
}
  //components are functions that return HTML code
  //here we write html code that nicely displays info for date etc
  // One root element per return statement if you do this:
  // return <div>Date</div><div><h2>Title</h2><div>Ammount</div></div> <h2>Expense item!</h2>
  // it will give error
  // the way to get around that is to wrap everything in a div 
        // now we can hve multiple elements that can also be side by side

// we must export it so it is usable outside the file
export default ExpenseItem;
