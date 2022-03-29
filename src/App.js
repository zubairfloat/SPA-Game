import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BackImage from "./assets/images/Union.svg";

const App = () => {
  return (
    <Layout>
      <Container
        fluid
        style={{
          backgroundColor:
            "linear-gradient(180deg, #208F85 0%, #1F454A 43.23%, #14332D 100%)",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/about" element={<About />} />
          <Route element={<NotFound />} /> */}
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
