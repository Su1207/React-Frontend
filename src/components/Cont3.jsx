import React from "react";
import "./style.css";
import rain from "../images/rain.png";
import Meter from "./Meter";

const Cont3 = () => {
  return (
    <div>
      <div className="container-1">
        <div className="cont-head" style={{ padding: "15px 15px 10px 15px" }}>
          <p>Precipitation</p>
          <img
            src={rain}
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
          1.4 cm
        </p>
        <div>
          <Meter value={1.4} maxValue={5} />
        </div>
      </div>
    </div>
  );
};

export default Cont3;
