// we import the overall react object here, then we extract specifically named things from the react library using the {}
// here { } we are importing a function called useState
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
//here we say that props, is the object that holds the values we get for
// the attributes on our custom element
// we get key - value pairs that is passed in by react automatically
// this is executed when the updated title is fetched from react which manages the state for us
const ExpenseItem = (props) => {
  // function clickHandler() {}
 const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // here we call the state updating function
    // we pass the new value as an arguement
    // this receives the component function in which we call the state updating function
    // also what we initialized our state with the useSTate will be executed again
    // we want to call it again when the state changes
    // we tell react we want to assign a new value to the states
    // it executes the component function again and evaluates the JSX code 
    // then it draws the changes onto the screen
    setTitle('Updated!');
    console.log(title);
  }
  return (
    //we use className because class is a reserved word in JS 
    // here we replace hardcoded data with opening and closing curly braces
    // built in method .toISOString is avail on all date objects to output as string
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
