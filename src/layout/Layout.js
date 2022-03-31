import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobHeader from "../components/MobHeader";
import MobileHeadContent from "../components/HeadMobContent";
import MobFooter from "../components/MobFooter";

const Layout = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const check = width < breakpoint;

  return (
    <>
      {width < breakpoint ? <MobHeader /> : <Header />}
      {check && <MobileHeadContent />}

      <main
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        {children}
      </main>
      {width < breakpoint ? <MobFooter /> : <Footer />}
    </>
  );
};

export default Layout;
