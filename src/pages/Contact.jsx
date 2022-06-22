import React from "react";
import NavbarCompo from "../components/Navbar";
import "./styles/treks.css";
function Contact() {
  return (
    <div>
      <NavbarCompo />
      <div className="trekHeader">
        <div className="layer">
          <span>Feel Free To</span>
          <span className="duo">Contact Us!</span>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
