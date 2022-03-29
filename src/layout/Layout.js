import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobHeader from "../components/MobHeader";
import BackImg from "../assets/images/background.svg";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  console.log(isMobile);
  return (
    <>
      {isMobile ? <MobHeader /> : <Header />}
      <main
        style={{
          backgroundImage: `url(${BackImg})`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
