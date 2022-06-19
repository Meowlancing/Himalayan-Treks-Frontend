import React from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { fa2, faPhone, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/navbar.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Logo from "../Assets/logo.png";

function NavbarCompo() {
  return (
    <div>
      <div className="topBar">
        <div className="topDetails">
          <span>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            91531234567
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            info@mail.com
          </span>
        </div>
        <div>
          <a href="#">Cancellation Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <Navbar expand="lg" variant="danger" className="navBar">
        <div className="navContainer">
          <Navbar.Brand href="/" className="logoContainer">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="navItem active">
                Home
              </Nav.Link>
              <Nav.Link to="/about-us" className="navItem">
                About Us
              </Nav.Link>

              <NavDropdown
                title="Treks"
                id="basic-nav-dropdown"
                className="navItem"
              >
                <NavDropdown.Item href="#action/3.1">items</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/blogs" className="navItem">
                Blogs
              </Nav.Link>
              <Nav.Link href="/contact" className="navItem">
                Contact Us
              </Nav.Link>
            </Nav>

            <Nav className="socials">
              {/* social media links if any */}
              <Nav.Link href="#"></Nav.Link>
              <Nav.Link href="#"></Nav.Link>
              <Nav.Link href="#"></Nav.Link>

              <Button className="bookBtn">
                Book Now
                <FontAwesomeIcon icon={faShoppingBag} className="icon" />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarCompo;
