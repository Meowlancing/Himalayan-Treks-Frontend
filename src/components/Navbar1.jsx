import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Assets/himalayan_exploration-Logo.png";
import "./styles/navbar.css";

const Navbar1 = () => {
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
          <a href="/cancellation" target="_blank">
            Cancellation Policy
          </a>
          <a href="/terms-conditions" target="_blank">
            Terms and Conditions
          </a>
          {/* <a href="#">Privacy Policy</a> */}
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" variant="danger">
        <Container>
          <Navbar.Brand href="/" className="logoContainer">
            <img style={{width:"50px"}} src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/" className="navItem">
                Home
              </Nav.Link>
              <Nav.Link href="/about-us" className="navItem">
                About Us
              </Nav.Link>

              <Nav.Link href="/treks" className="navItem dropMenu">
                Treks
                <NavDropdown id="basic-nav-dropdown">
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
              </Nav.Link>

              <Nav.Link href="/blogs" className="navItem">
                Blogs
              </Nav.Link>
              <Nav.Link href="/contact" className="navItem">
                Contact Us
              </Nav.Link>
            </Nav>


            {/*Other buttons*/}
            <Nav>
              <Nav.Link href="#"></Nav.Link>
              <Nav.Link href="#"></Nav.Link>
              <Nav.Link href="#"></Nav.Link>
              <Nav.Link eventKey={2} href="/contact">
                <Button>Book Now<FontAwesomeIcon icon={faShoppingBag} className="icon" /></Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
