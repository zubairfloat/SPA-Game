import React from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import MobHeader from "../components/MobHeader";

const Layout = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      {width < breakpoint ? <MobHeader /> : <Header />}
      <main
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
