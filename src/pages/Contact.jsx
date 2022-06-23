import React from "react";
import ContactCard from "../components/ContactCard";
import NavbarCompo from "../components/Navbar";
import "./styles/treks.css";
function Contact() {
  return (
    <div>
      <NavbarCompo />
      <div className="trekHeader">
        <div className="layer">
          <h2>Feel Free To <span className="duo">Contact Us!</span></h2>
          
        </div>
      </div>
      <ContactCard/>
    </div>
  );
}

export default Contact;
