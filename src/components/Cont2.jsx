import React from "react";
import "./style.css";
import wind from "../images/wind.png";
import WindMeter from "./WindMeter";

const Cont2 = () => {
  return (
    <div>
      <div className="container-1">
        <div className="cont-head" style={{ padding: "15px 15px 10px 15px" }}>
          <p>Wind</p>
          <img
            src={wind}
            alt=""
            style={{
              backgroundColor: "#0080ff",
              borderRadius: "8px",
              padding: "2px",
            }}
            width="20px"
            height="20px"
          />
        </div>
        <div className="meter">
          <WindMeter windS={8} />
        </div>
      </div>
    </div>
  );
};

export default Cont2;
