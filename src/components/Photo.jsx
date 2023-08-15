import React from "react";
import profilePhoto1 from "../images/profilePhoto1.jpg";

const Photo = () => {
  return (
    <div>
      <img
        src={profilePhoto1}
        alt="profile"
        style={{ borderRadius: "30px" }}
        sizes="40"
      />
    </div>
  );
};

export default Photo;
