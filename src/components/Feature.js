import React from "react";

const Feature = () => {
  return (
    <div className="container feature-main">
      <div className="row d-flex justify-content-center">
        <div className="feature-img-div col-4"></div>
        <div className="col-4 d-flex align-items-center justify-content-center">
          <div>
            <h3>Lorem Ipsum</h3>
            <p>
              Buy land, acquire seeds, grow crops, produce refined and
              manufactured goods.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-4 d-flex align-items-center justify-content-center">
          <div>
            <h3>Lorem Ipsum</h3>
            <p>
              Buy land, acquire seeds, grow crops, produce refined and
              manufactured goods.{" "}
            </p>
          </div>
        </div>
        <div className="feature-img-div col-4"></div>
      </div>
    </div>
  );
};

export default Feature;
