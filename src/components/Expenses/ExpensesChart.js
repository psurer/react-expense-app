import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // here we loop through our expenses which we get via props
  // we have a look at each expense, get the month, 
  // and update the value of the appropraite data point by the expense amount 
  for (const expense in props.expenses) {
      const expenseMonth = expense.date.getMonth(); // starting at 0 => Jan =>0
      chartDataPoints[expenseMonth].value += expense.amount; // we increase the value of a given month by the expense amount
  } // with the for loop (we go through all expenses to sum up all exp for diff months and assign the values to appropriate months to the appropiate data points ) 
// after the for loop we still have the array of chartDataPoints with the summed up values for the expenses instead of 0
  return <Chart dataPoints={chartDataPoints}/>;
};

export default ExpensesChart;
