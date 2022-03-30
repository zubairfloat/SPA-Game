import React from "react";

const Feature = () => {
  return (
    <div className="container feature-main">
      <div className="row d-flex justify-content-center py-4">
        <div className="feature-img-div col-4"></div>
        <div className="col-lg-4 col-md-8 d-flex align-items-center justify-content-center">
          <div>
            <h3 className="text-center text-md-start">Lorem Ipsum</h3>
            <p className="text-center text-md-start">
              Buy land, acquire seeds, grow crops, produce refined and
              manufactured goods.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center py-4">
        <div className="col-lg-4  col-md-8 d-flex align-items-center justify-content-center">
          <div>
            <h3 className="text-center text-md-start">Lorem Ipsum</h3>
            <p className="text-center text-md-start">
              Buy land, acquire seeds, grow crops, produce refined and
              manufactured goods.{" "}
            </p>
          </div>
        </div>
        <div className="feature-img-div order-md-last order-first col-4"></div>
      </div>
    </div>
  );
};

export default Feature;
