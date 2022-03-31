import React from "react";
import Mask from "../assets/images/meta-1.svg";
import Digit from "../assets/images/pana.svg";
import Crypt from "../assets/images/meta-crypto.svg";
import LinesRight from "../assets/images/meta-lines.svg";
import LinesLeft from "../assets/images/meta-lines-bottom.svg";

const Meta = ({ title }) => {
  return (
    <div id="mint" className="container d-none d-md-block">
      <h3 className="heading-home py-2">How to set up</h3>
      <h3 className="heading-home py-1">A Metamask wallet</h3>
      <div className="row ">
        <div className="col-6 d-flex align-items-end flex-column">
          <div className="meta-mask-app">
            <img src={Mask} alt="mask" />
            <p>
              In order to claim your NFTs and free HA$H tokens, you will need to
              create a metamask wallet to store them. Metamask is a
              browser-based wallet which allows you to easily log into
              blockchain integrated websites and games - and will be your main
              account to access the Hashville game along with all of your assets
            </p>
          </div>
          <div className="meta-mask-app">
            <img src={Digit} alt="mask" />
            <p>
              Once wallet is connected, input your 32 digit hash code found on
              the card inside of your qualifying Delta Farms product, into the
              prompt. This code enables you to claim your free NFTs and tokens.
            </p>
          </div>
        </div>
        <div className="col-6">
          <div className="meta-right-lines">
            <img src={LinesRight} alt="lines" />
          </div>
          <div className="meta-mask-vaullet">
            <img src={Crypt} alt="mask" />
            <p>
              To install metamask, click this link and follow instructions to
              install and create a new account. Once installed, and the account
              has been created, please return to this page and click the
              “Connect Wallet” button below. In order to claim free NFTs and
              HA$H token, you will need this wallet.
            </p>
            <button>Connect Wallet</button>
          </div>
          <div className="pt-4">
            <img src={LinesLeft} alt="lines" />
          </div>
        </div>
      </div>
      <div id="hash"></div>
    </div>
  );
};

export default Meta;
