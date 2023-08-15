import React from "react";
import drop from "../images/drop.png";
import "./style.css";
import Meter from "./Meter";

const Cont1 = () => {
  return (
    <div>
      <div className="container-1">
        <div className="cont-head" style={{ padding: "15px 15px 10px 15px" }}>
          <p>Humidity </p>
          <img
            src={drop}
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
          <span style={{ fontSize: "20px", fontWeight: "bolder" }}>82%</span>{" "}
          bad
        </p>
        <div className="cont1-meter">
          <Meter value={82} maxValue={100} />
        </div>
      </div>
    </div>
  );
};

export default Cont1;
