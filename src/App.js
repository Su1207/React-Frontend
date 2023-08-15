import "./App.css";
import addBox from "./images/addBox.png";
import toggle from "./images/toggle.png";
import navigate from "./images/navigate.png";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { BsSunrise, BsThreeDots, BsSunset } from "react-icons/bs";
import Photo from "./components/Photo";
// import { FaCloudRain } from "react-icons/fa";
// import drop from "./images/drop.png";
import after from "./images/after.png";
import before from "./images/before.png";
import sunny from "./images/sunny.png";
import down from "./images/down.png";
import afterB from "./images/afterB.png";
import Chart from "./components/Chart";
import Cont1 from "./components/Cont1";
import Cont2 from "./components/Cont2";
import Cont3 from "./components/Cont3";
import Cont4 from "./components/Cont4";
import Cont5 from "./components/Cont5";
import Cont6 from "./components/Cont6";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="left-container">
          <div className="nav">
            <div>
              <img src={addBox} alt="" sizes="30" />
            </div>
            <div>
              <PiDotsThreeOutlineLight size="30" color="white" />
            </div>
            <div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "8px",
                  color: "white",
                  fontSize: "12px",
                }}
              >
                &deg;C <img src={toggle} alt="" width="30px" height="30px" />{" "}
                &deg;F
              </span>
            </div>
          </div>

          <div className="weather">
            <div className="location">
              <p
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={navigate} alt="" width="20px" height="20px" />
                New York, USA
              </p>
              <p style={{ color: "white" }}>
                <BsSunrise /> 07:19
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "white",
                  paddingLeft: "5px",
                }}
              >
                Today 25 sept
              </p>
              <p style={{ color: "white" }}>
                <BsSunset /> 19:32
              </p>
            </div>
          </div>

          <div>
            <div className="temperature-meter">
              <img src={before} alt="" />
              <div className="temperature">
                <p>
                  <span style={{ fontSize: "80px", color: "white" }}>
                    27&deg;
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      fontSize: "18px",
                    }}
                  >
                    <img src={sunny} alt="" /> Sunny
                  </span>
                </p>
              </div>
              <img src={after} alt="" />
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="right-container-heading">
            <p style={{ fontWeight: "600", marginLeft: "35px" }}>
              Welcome back Isabella! <br />
              <span>Check out today's weather information</span>
            </p>
            <div className="profile">
              <BsThreeDots className="dots" size="25" /> <Photo />
            </div>
          </div>

          <div className="sub-container1">
            <div className="graphContainer">
              <div className="textGraphContainer">
                <div
                  className="textGraphContainer1"
                  style={{ marginLeft: "35px" }}
                >
                  <p>Upcoming Hours</p>
                </div>
                <div className="textGraphContainer2">
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px",
                      backgroundColor: "#E2E2E2",
                      borderRadius: "30px",
                      marginBottom: "10px",
                      marginRight: "20px",
                      color: "lightslategray", // Adding margin between the two <p> tags
                    }}
                  >
                    <span>Rain precipitation</span>
                    <img
                      src={down}
                      alt=""
                      style={{ marginLeft: "5px" }} // Adding margin between the text and image
                    />
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px",
                      backgroundColor: "#E2E2E2",
                      borderRadius: "30px",
                      marginBottom: "10px",
                      marginRight: "20px",
                    }}
                  >
                    <span>Next days</span>
                    <img
                      src={afterB}
                      alt=""
                      style={{
                        marginLeft: "5px",
                        width: "15px",
                        height: "15px",
                      }} // Adding styles for the image
                    />
                  </p>
                </div>
              </div>

              <div>
                <Chart />
              </div>
            </div>
          </div>

          <p style={{ fontWeight: "600", marginLeft: "35px" }}>
            More details of today's weather
          </p>

          <div className="sub-container2">
            <div className="sub-sub-container">
              <Cont1 />
            </div>
            <div className="sub-sub-container">
              <Cont2 />
            </div>
            <div className="sub-sub-container">
              <Cont3 />
            </div>
            <div className="sub-sub-container">
              <Cont4 />
            </div>
            <div className="sub-sub-container">
              <Cont5 />
            </div>
            <div className="sub-sub-container">
              <Cont6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
