import React from "react";
import "./style.css";
import feels from "../images/feels.png";
import Meter from "./Meter";

const Cont5 = () => {
  return (
    <div>
      <div className="container-1">
        <div className="cont-head" style={{ padding: "15px 15px 10px 15px" }}>
          <p>Feels like</p>
          <img
            src={feels}
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
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          30&deg;
        </p>
        <div>
          <Meter value={30} maxValue={50} />
        </div>
      </div>
    </div>
  );
};

export default Cont5;
