import React from "react";
import "./style.css";
import sunny from "../images/sunny.png";
import Meter from "./Meter";

const Cont4 = () => {
  return (
    <div>
      <div className="container-1">
        <div className="cont-head" style={{ padding: "15px 15px 10px 15px" }}>
          <p>UV Index</p>
          <img
            src={sunny}
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
        <p style={{ textAlign: "center" }}>
          <span style={{ fontSize: "20px", fontWeight: "bolder" }}>4</span>{" "}
          medium
        </p>
        <div>
          <Meter value={4} maxValue={5} />
        </div>
      </div>
    </div>
  );
};

export default Cont4;
