import React from "react";

import ChartBar from "./ChartBar.js";
import "./Chart.css";

// here we make the chart configurable, and the components that use chart component
// can decide how many data points with which values will be rendered
// we map every data point to a chartBar
// we define dataPoint as an object that has a value property
const Chart = (props) => {
  return (
    <dive className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </dive>
  );
};

export default Chart;
