import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/images/footer-logo.svg";
import SocialIcons from "./SocialIcons";

const MobHeader = () => {
  return (
    <Navbar
      className="px-1"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <div className="mob-nav-btn">
            <Nav.Link href="#features">
              <button>Play Game</button>
            </Nav.Link>
            <Nav.Link href="#features">
              <button>Stake Land</button>
            </Nav.Link>
          </div>
          <div className="nav-head-btn">
            <Nav.Link href="#features">
              <div className="head-mob-btn">
                <h3>The Team</h3>
              </div>
            </Nav.Link>
            <Nav.Link href="#features">
              <div className="head-mob-btn">
                <h3>Whitepaper</h3>
              </div>
            </Nav.Link>
            <Nav.Link href="#features">
              <div className="head-mob-btn">
                <h3>Mint NFTs</h3>
              </div>
            </Nav.Link>
            <Nav.Link href="#features">
              <div className="head-mob-btn">
                <h3>HA$H</h3>
              </div>
            </Nav.Link>
            <Nav.Link href="#features">
              <div className="head-mob-btn">
                <h3>Marketplace</h3>
              </div>
            </Nav.Link>
          </div>
          <div className="border-head px-4">
            <div className="border-mob-head"></div>
          </div>
          <div className="head-social-icons">
            <SocialIcons />
          </div>
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobHeader;
