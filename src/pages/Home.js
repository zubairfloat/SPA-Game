import React from "react";
import Feature from "../components/Feature";
import RoadMap from "../components/RoadMap";
// import TeamsMember from "../components/TeamsMembers";
// import Hash from "../components/Hash";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="py-4 row justify-content-evenly">
        <div className="home-head-btn">
          <h2>The Team</h2>
        </div>
        <div className="home-head-btn">
          <h2>Whitepaper</h2>
        </div>
        <div className="home-head-btn">
          <h2>Mint NFTs</h2>
        </div>
        <div className="home-head-btn">
          <h2>HA$H</h2>
        </div>
        <div className="home-head-btn">
          <h2>Marketplace</h2>
        </div>
      </div>

      {/******** Game Features *********/}

      <div className="hm-game">
        <h2 className="home-h2 py-5">Game Features</h2>
        <Feature />
        <Feature />
        <div className="d-flex justify-content-center py-5">
          <button>Read the Whitepaper</button>
        </div>
      </div>

      {/******** Road Map *********/}
      <RoadMap />
      {/******** Teams Members *********/}
      {/* <TeamsMember /> */}
      {/******** Hash *********/}
      {/* <Hash /> */}
    </div>
  );
};

export default Home;
