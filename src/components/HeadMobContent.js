import React from "react";
import BackImg from "../assets/images/back.svg";

const MobileHeadContent = () => {
  return (
    <div className="container-fluid head-mob-cn-main pb-4">
      <div className="row">
        <div className="col-12 p-0">
          <img className="w-100" src={BackImg} alt="back" />
        </div>

        <div className="col-12">
          <h3>Grow Cannabis, Earn $HASH tokens, Buy Real Hemp Products</h3>
        </div>

        <div className="col-12">
          <p>
            Hashville is a decentralized play-to-earn game with unique NFTs,
            real world utility for the $HASH tokens, and very fun gameplay
            mechanics
          </p>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button>Claim your Head Stash</button>
        </div>
      </div>
    </div>
  );
};

export default MobileHeadContent;
