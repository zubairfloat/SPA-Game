import React, { useRef, useState } from "react";
import Feature from "../components/Feature";
import RoadMap from "../components/RoadMap";
import TeamsMember from "../components/TeamsMembers";
import Hash from "../components/Hash";
import Token from "../components/Token";
import Meta from "../components/Meta";
import useEventListener from "../hooks/useEventListener";
import { useInView } from "react-intersection-observer";
import ButtonBack from "../assets/images/arc.png";

const ListBtn = [
  { id: 1, lable: "The Team", scroll: "the-team", active: false },
  {
    id: 2,
    lable: "Whitepaper",
    scroll: "game",
    active: false,
  },
  { id: 3, lable: "Mint NFTs", scroll: "mint", active: false },
  { id: 4, lable: "HA$H", scroll: "hash", active: false },
  {
    id: 5,
    lable: "Marketplace",
    scroll: "sss",
    active: false,
  },
];
const Home = () => {
  const ref = useRef();
  const [btnState, setBtnState] = useState(ListBtn);
  const [sectionRef, inView] = useInView();
  const [sticy, setSticky] = useState();
  const [offSet, setOffSet] = useState();
  // const [sectionRef2, inView2] = useInView();
  useEventListener("scroll", () => {
    if (!ref.current) return;
    const { offsetTop } = ref.current;
    if (offsetTop !== 0) {
      setOffSet(offsetTop);
      setSticky(window.scrollY > offsetTop);
      ref.current.classList[window.scrollY > offsetTop ? "add" : "remove"](
        "is-sticky"
      );
    } else {
      ref.current.classList[offSet > window.scrollY ? "remove" : "add"](
        "is-sticky"
      );
    }
  });
  console.log({ inView });
  const handleClick = (item) => {
    let newList = btnState.map((elem) => {
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

  return (
    <div>
      <div
        className={`${
          sticy
            ? "d-none d-md-flex py-3 row justify-content-evenly"
            : "button-div-head d-none d-md-flex py-3 row justify-content-evenly"
        }`}
        style={{
          backgroundImage: `${!sticy ? `url(${ButtonBack})` : ""}`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
        ref={ref}
      >
        {btnState?.map((item) => {
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
      <div className="container-fluid">
        {/******** Game Features *********/}

        <div className={`hm-game ${sticy ? "pt-5" : ""}`} ref={sectionRef}>
          <h2 className={`heading-home pb-5 `}>Game Features</h2>
          <Feature />
          <Feature />
          <div className="d-flex justify-content-center py-5">
            <button id="game">Read the Whitepaper</button>
          </div>
          <div></div>
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
    </div>
  );
};

export default Home;
