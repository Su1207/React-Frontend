import React, { useState, useEffect } from "react";
import "./style.css";

const WindMeter = ({ windS }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Calculate the rotation angle based on wind speed (adjust the scale as needed)
    const maxWindSpeed = 40; // Maximum wind speed value
    const maxRotation = 180; // Maximum rotation angle
    const angle = (windS / maxWindSpeed) * maxRotation;
    setRotation(angle);
  }, [windS]);

  return (
    <div className="wind-speed-meter">
      <svg width="100" height="100">
        <circle cx="100" cy="100" r="90" fill="#0080ff" />
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="10"
          stroke="black"
          strokeWidth="8"
          transform={`rotate(${rotation} 100 100)`}
        />
      </svg>
      <p style={{ paddingLeft: "40px", fontWeight: "bold" }}>{windS} km/h</p>
    </div>
  );
};

export default WindMeter;
