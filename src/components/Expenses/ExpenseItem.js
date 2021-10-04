import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// import Expenses from './Expenses';

//here we say that props, is the object that holds the values we get for
// the attributes on our custom element
// we get key - value pairs that is passed in by react automatically
function ExpenseItem(props) {
  // using builtin date consturctor that comes with JS 
  return (
    //we use className because class is a reserved word in JS 
    // here we replace hardcoded data with opening and closing curly braces
    // built in method .toISOString is avail on all date objects to output as string
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
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


// // ALTERNATIVE TO THE JSX CODE:
// // THIS IS UNDER THE HOOD CODE THAT IS CREATED WHEN WE USE JSX
// //createElement method is called
// // createElement takes 3 arguements (parameters)
// // 1st arguement is the element that should be created i.e. DIV , we pass it as string
// // 2nd argumenet is an object that configures the element, it sets the attributes of the element
// // as the div has no attributes, so we pass in an empty object
// // 3nd argumenet is the content betwwen the opening and closing div tags, this can be a infinitly long list of 
// //    arguements which are the diff content pieces between the opening and closing tags
// // here we have two elements so we have two extra arguements 
// // here 3rd arguement would be our h2 element which is the first child of the div
// // there for we would called react createElement for that h2
// // now we have the let's get started string which is the content of the h2
// return React.createElement(
//   'div', 
//   {}, 
  // React.createElement('h2', {}, 'Let\'s get started!'),
  // //next to our second create element call we have a 3rd create element call which is the neighbor element to the h2
  // // when using a custom component you don't use string you instead point to your custom component which is an imported function
  // // remember that components are just functions
  // // 1st arguement is Expenses function as an element
  // // 2nd arguement is onject of properties and atributes that should be set
  // React.createElement(Expenses, {items: expenses},)
  // ); 


// return (
//   <div>
//     <h2>Let's get started</h2>
//     <Expenses items={expenses} />
//   </div>
// );