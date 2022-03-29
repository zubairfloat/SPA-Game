import React from "react";

const RoadMap = () => {
  return (
    <div>
      <h3 className="heading-home py-5">Game Roadmap</h3>
      <div className="container">
        <div className="row justify-content-center">
          <div className="roadmap-col col-4">
            <div className="road-inner"></div>
            <div className="road-map-content">
              <h4>Phase 1</h4>
              <ul>
                <li>Blind Box Releases</li>
                <li>HA$H Token Launch</li>
                <li>Website Launch</li>
                <li>Discord Community Setup</li>
              </ul>
            </div>
          </div>
          <div className="roadmap-col col-4">
            <div className="road-inner"></div>
            <div className="road-map-content">
              <h4>Phase 2</h4>
              <ul>
                <li>Blind Box Releases</li>
                <li>HA$H Token Launch</li>
                <li>Website Launch</li>
                <li>Discord Community Setup</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
