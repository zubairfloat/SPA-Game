import React from "react";
import Background from "../assets/images/back.jpg";
import SocialIcons from "../components/SocialIcons";
const Header = () => {
  return (
    <header
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
          <SocialIcons />
          <div className="head-btn">
            <button className="mx-2">Play Game</button>
            <button className="mx-2">Stake Land</button>
          </div>
        </div>
        <div className="header-content">
          <div className=" head-con-row d-flex justify-content-center">
            <div className="col-8">
              <h1>Grow Cannabis, Earn $HASH tokens, Buy Real Hemp Products</h1>
              <p className="pt-4">
                Hashville is a decentralized play-to-earn game with unique NFTs,
                real world utility for the $HASH tokens, and very fun gameplay
                mechanics
              </p>
              <div className="d-flex justify-content-center pt-0 pt-lg-5">
                <button>Claim your Head Stash</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
