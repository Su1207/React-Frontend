import React from "react";

const Meter = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="linear-meter">
      <div className="meter-bar">
        <div className="fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default Meter;
