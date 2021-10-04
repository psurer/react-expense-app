import React from 'react';

import './Card.css';
// this will act as a shell for our expenses or expense item content
function Card(props) {
    //children is reserved name 
   // here we are adding const with card as default class that is always applied
   // anything we receive as a class name will be added to string
   //any value set on the className prop is added to long string of classNames 
   //added to the div instead of the card
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}


export default Card;