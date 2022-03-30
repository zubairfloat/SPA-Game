import React from "react";
import { ReactComponent as HashLogo } from "../assets/images/HASH_HASHVILLE_LOGO final-2 2.svg";

const Token = () => {
  return (
    <div className="token-main d-none d-md-block py-5">
      <div className="container py-5">
        <div className="row d-flex">
          <div className="col-1"></div>
          <div className="col-6">
            <h3 className="heading-home ">HASH Token</h3>
            <p className="pt-4">
              HASH tokens are the ERC-20 utility token for the Hashville
              ecosystem. Players can use the HASH token for gameplay within
              Hashville, and when purchasing physical goods on the Hashville
              store.
            </p>
            <div className="d-flex justify-content-between">
              <h4>Read Our Whitepaper</h4>
              <div className="team-bar-div"></div>
              <h4>Read Our Whitepaper</h4>
            </div>
          </div>
          <div className="col-5 d-flex justify-content-center align-items-center">
            <HashLogo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Token;
