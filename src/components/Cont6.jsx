import React from "react";
import "./style.css";
import { BiCloudLightRain } from "react-icons/bi";
import Meter from "./Meter";

const Cont6 = () => {
  return (
    <div>
      <div className="container-1">
        <div className="cont-head" style={{ padding: "15px 15px 10px 15px" }}>
          <p>Chance of rain</p>
          <BiCloudLightRain
            style={{
              backgroundColor: "#0080ff",
              borderRadius: "8px",
              padding: "2px",
              color: "white",
            }}
            size="20px"
          />
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bolder",
          }}
        >
          42%
        </p>
        <div>
          <Meter value={42} maxValue={100} />
        </div>
      </div>
    </div>
  );
};

export default Cont6;
