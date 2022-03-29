import React from "react";
import Background from "../assets/images/back.jpg";
import Mask from "../assets/images/Vector (1).svg";
import Twitter from "../assets/images/Vector.svg";
import FaceIcon from "../assets/images/Vector (2).svg";

const Header = () => {
  return (
    <div
      className="head-main-container container-fluid"
      // style={{
      //   backgroundImage: `url(${Background})`,

      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100%",
      // }}
    >
      {" "}
      <img className="header-img" src={Background} alt="img" />
      <div>
        <div className="header-head d-flex justify-content-between py-3 px-5">
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
          <div className="head-btn">
            <button className="mx-2">Play Game</button>
            <button className="mx-2">Stake Land</button>
          </div>
        </div>
        <div className="header-content">
          <div className=" head-con-row row d-flex justify-content-center">
            <div className="col-8">
              <h1>Grow Cannabis, Earn $HASH tokens, Buy Real Hemp Products</h1>
              <p>
                Hashville is a decentralized play-to-earn game with unique NFTs,
                real world utility for the $HASH tokens, and very fun gameplay
                mechanics
              </p>
              <div className="d-flex justify-content-center">
                <button>Claim your Head Stash</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
