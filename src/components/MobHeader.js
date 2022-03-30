import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/images/footer-logo.svg";

const MobHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <div className="mob-nav-btn">
            <Nav.Link href="#features">
              <button>Play Game</button>
            </Nav.Link>
            <Nav.Link href="#features">
              <button>Stake Land</button>
            </Nav.Link>
          </div>
          <div className="nav-head-btn">
            <Nav.Link href="#features">
              <button>Play Game</button>
            </Nav.Link>
            <Nav.Link href="#features">
              <button>Stake Land</button>
            </Nav.Link>
          </div> */}
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobHeader;
