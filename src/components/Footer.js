import React from "react";
import Logo from "../assets/images/footer-logo.svg";
import { ReactComponent as Mask } from "../assets/images/footer/mask.svg";
import { ReactComponent as Face } from "../assets/images/footer/face.svg";
import { ReactComponent as Twitter } from "../assets/images/footer/twitter.svg";

const Footer = () => {
  return (
    <div className="main-footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={Logo} alt="" />
            <p>© Copyright 2022 </p>
            <p>All Rights Reserved.</p>
          </div>
          <div className="col-1"></div>
          <div className="col-2 pt-3">
            <ul class="no-bullets">
              <li>Home</li>
              <li>The Team</li>
              <li>Mint NFTs</li>
              <li>$HASH</li>
              <li>Marketplace</li>
            </ul>
          </div>
          <div className="col-2 pt-3">
            <ul class="no-bullets">
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Whitepaper</li>
            </ul>
          </div>
          <div className="col-4 pt-3">
            <div className="d-flex justify-content-center">
              <div className="footer-icon-div">
                <Mask />
              </div>
              <div className="footer-icon-div">
                <Twitter />
              </div>

              <div className="footer-icon-div">
                <Face />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
