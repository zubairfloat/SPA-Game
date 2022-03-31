import React from "react";
import Mask from "../assets/images/Vector (1).svg";
import Twitter from "../assets/images/Vector.svg";
import FaceIcon from "../assets/images/Vector (2).svg";

const SocialIcons = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="head-icon">
        <img src={Mask} alt="" />
      </div>
      <div className="head-icon">
        <img src={Twitter} alt="" />
      </div>
      <div className="head-icon">
        <img src={FaceIcon} alt="" />
      </div>
    </div>
  );
};

export default SocialIcons;
