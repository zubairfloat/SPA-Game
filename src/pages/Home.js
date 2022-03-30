import React, { useRef } from "react";
import Feature from "../components/Feature";
import RoadMap from "../components/RoadMap";
import TeamsMember from "../components/TeamsMembers";
import Hash from "../components/Hash";
import Token from "../components/Token";
import Meta from "../components/Meta";
import useEventListener from "../hooks/useEventListener";

const Home = () => {
  const ref = useRef();
  useEventListener("scroll", () => {
    if (!ref.current) return;
    const { offsetTop } = ref.current;
    ref.current.classList[window.scrollY > offsetTop ? "add" : "remove"](
      "is-sticky"
    );
  });
  return (
    <div className="container-fluid">
      <div
        className="d-none d-md-flex py-4 row justify-content-evenly"
        ref={ref}
      >
        <div
          className="home-head-btn"
          onClick={() => {
            setTimeout(() => {
              document.getElementById("the-team").scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 50);
          }}
        >
          <h2>The Team</h2>
        </div>
        <div className="home-head-btn">
          <h2>Whitepaper</h2>
        </div>
        <div
          className="home-head-btn"
          onClick={() => {
            setTimeout(() => {
              document.getElementById("mint").scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 50);
          }}
        >
          <h2>Mint NFTs</h2>
        </div>
        <div
          className="home-head-btn"
          onClick={() => {
            setTimeout(() => {
              document.getElementById("hash").scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }, 50);
          }}
        >
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
      {/* <div id="the-team"></div> */}
      <TeamsMember />

      <Meta />
      {/******** Token *********/}
      <Token />
      {/******** Hash *********/}
      <Hash />
    </div>
  );
};

export default Home;
