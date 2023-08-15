import React from "react";
import { Area, AreaChart } from "recharts";

const data = [
  { name: "Jan", precipitation: 7, additionalData: 27 },
  { name: "Feb", precipitation: 18, additionalData: 28 },
  { name: "Mar", precipitation: 28, additionalData: 29 },
  { name: "Apr", precipitation: 8, additionalData: 29 },
  { name: "May", precipitation: 20, additionalData: 30 },
  { name: "Jun", precipitation: 11, additionalData: 29 },
  { name: "Jul", precipitation: 19, additionalData: 29 },
  { name: "Aug", precipitation: 3, additionalData: 28 },
];

// const CustomizedLabel = ({ x, y, value }) => (
//   <g transform={`translate(${x},${y - 20})`}>
//     <text x="0" y="0" dy="-6" fill="#8884d8" textAnchor="middle">
//       {value}
//     </text>
//   </g>
// );

// const CustomLine = ({ x1, x2, y1, y2, stroke }) => (
//   <line x1={x1} x2={x2} y1={y1} y2={y2} stroke={stroke} />
// );

const Chart = () => {
  return (
    <div className="chart-container">
      {/* <Line
          type="monotone"
          dataKey="precipitation"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          dot={(props) => (
            <React.Fragment>
              <circle {...props} r="3" fill="#8884d8" />
              <line
                x1={props.cx}
                y1={props.cy}
                x2={props.cx}
                y2={props.cy - 20} // Position the line above the point
                stroke="red"
              />
            </React.Fragment>
          )}
        />*/}
      <AreaChart
        width={1000}
        height={100}
        data={data}
        margin={{ top: 0, right: 30, left: 40, bottom: 5 }}
      >
        <Area
          type="monotone"
          dataKey="precipitation"
          stroke="#8884d8"
          fill="#0080ff"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
