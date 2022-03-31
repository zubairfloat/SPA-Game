import React, { useRef, useState } from "react";
import Feature from "../components/Feature";
import RoadMap from "../components/RoadMap";
import TeamsMember from "../components/TeamsMembers";
import Hash from "../components/Hash";
import Token from "../components/Token";
import Meta from "../components/Meta";
import useEventListener from "../hooks/useEventListener";
import { useInView } from "react-intersection-observer";

const ListBtn = [
  { id: 1, lable: "The Team", scroll: "the-team", active: false },
  {
    id: 2,
    lable: "Whitepaper",
    scroll: "n",
    active: false,
  },
  { id: 3, lable: "Mint NFTs", scroll: "mint", active: false },
  { id: 4, lable: "HA$H", scroll: "hash", active: false },
  {
    id: 5,
    lable: "Marketplace",
    scroll: "hash",
    active: false,
  },
];
const Home = () => {
  const ref = useRef();
  const [btnState, setBtnState] = useState(ListBtn);
  const [sectionRef, inView] = useInView();
  // const [sectionRef2, inView2] = useInView();
  useEventListener("scroll", () => {
    if (!ref.current) return;
    const { offsetTop } = ref.current;

    ref.current.classList[window.scrollY > offsetTop ? "add" : "remove"](
      "is-sticky"
    );
  });

  const handleClick = (item) => {
    console.log(item);
    let newList = btnState.map((elem) => {
      console.log(item.id);
      if (elem.id === item.id) {
        elem.active = true;
      } else {
        elem.active = false;
      }
      return elem;
    });
    setBtnState(newList);
    setTimeout(() => {
      document.getElementById(`${item.scroll}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  console.log({ inView });
  return (
    <div className="container-fluid">
      <div
        className="d-none d-md-flex py-3 row justify-content-evenly"
        ref={ref}
      >
        {btnState?.map((item) => {
          console.log(item.scroll);
          return (
            <div
              className={`home-head-btn ${item.active ? "border-select" : ""}`}
              onClick={() => {
                handleClick(item);
              }}
            >
              <h2>{item.lable}</h2>
            </div>
          );
        })}
      </div>

      {/******** Game Features *********/}

      <div className="hm-game" ref={sectionRef}>
        <h2 className="heading-home py-5">Game Features</h2>
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
