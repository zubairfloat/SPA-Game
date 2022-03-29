import React from "react";

const Teams = (props) => {
  return (
    <div className={`teams-content row d-flex justify-content-center my-4`}>
      <div className="feature-img-div col-4"></div>
      <div
        className={`col-5 d-flex align-items-center justify-content-center ${
          props.order ? "order-first" : ""
        }`}
      >
        <div
          className={` ${props.order ? "teams-left-div" : "teams-right-div"}`}
        >
          <h2>{props.title}</h2>
          <h3>{props.heading}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
