import React, { useEffect, useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faTimes,
  faPhone,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/navbar.css";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Logo from "../Assets/himalayan_exploration-Logo.png";
import { Link } from "react-router-dom";
import axios from "axios";

function NavbarCompo() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "https://himalyan-explorations.herokuapp.com/api/treksList",
      });
      setData(resp.data);
    } catch (err) {
      console.log("Something went wrong");
      return [];
    }
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="Desktop">
        <div className="topBar">
          <div className="topDetails">
            <span>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              9021779329
            </span>
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              info.thehimalayan@gmail.com
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
                <Nav.Link href="/about-us" className="navItem">
                  About Us
                </Nav.Link>

                <Nav.Link href="/treks" className="navItem dropMenu">
                  Treks
                  <NavDropdown id="basic-nav-dropdown">
                    {data.map((item) => {
                      return (
                        <NavDropdown.Item href="#action/3.1">
                          {item.title}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                </Nav.Link>

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
                <a href="/contact">
                  <Button className="bookBtn">
                    Book Now
                    <FontAwesomeIcon icon={faShoppingBag} className="icon" />
                  </Button>
                </a>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      <div className="MobNavbar">
        <span className="Mobnav-logo">
          <img
            src={Logo}
            alt="logo"
            style={{ height: "38px", width: "33px", marginRight: "5px" }}
          />
          Himalayan Explorations
        </span>
        <div className={`Mobnav-items ${isOpen && "open"}`}>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/treks">Treks</a>
          <a href="/blogs">Blogs</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div
          className={`Mobnav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
}

export default NavbarCompo;
