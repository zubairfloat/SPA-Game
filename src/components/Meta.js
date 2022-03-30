import React from "react";

import MetaImg from "../assets/images/meta.svg";

const Meta = ({ title }) => {
  return (
    <div id="mint" className="container">
      <div className="row">
        <div className="col">
          <img className="w-100" src={MetaImg} alt="meta" />
        </div>
      </div>
      <div id="hash"></div>
    </div>
  );
};

export default Meta;
