import React from "react";
import Logo from "../assets/images/footer-logo.svg";
import { ReactComponent as Mask } from "../assets/images/footer/mask.svg";
import { ReactComponent as Face } from "../assets/images/footer/face.svg";
import { ReactComponent as Twitter } from "../assets/images/footer/twitter.svg";

const MobFooter = () => {
  return (
    <div className="container d-flex flex-column justify-content-center main-footer align-items-center py-4">
      <img src={Logo} alt="" />
      <div className="col-4 pt-3">
        <div className="d-flex justify-content-center">
          <div className="footer-icon-div">
            <Mask width="40px" />
          </div>
          <div className="footer-icon-div">
            <Twitter width="40px" />
          </div>

          <div className="footer-icon-div">
            <Face width="40px" />
          </div>
        </div>
      </div>
      <div>
        <ul class="no-bullets text-li-center  pt-3">
          <li>Home</li>
          <li>The Team</li>
          <li>Mint NFTs</li>
          <li>$HASH</li>
          <li>Marketplace</li>
        </ul>
      </div>
      <div className="col-2 text-li-center pt-3">
        <ul class="no-bullets">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
          <li>Whitepaper</li>
        </ul>
      </div>
      <div className="text-li-center pt-3">
        <ul class="no-bullets">
          <li>© Copyright 2022</li>
          <li>All Rights Reserved.</li>
        </ul>
      </div>
    </div>
  );
};

export default MobFooter;
