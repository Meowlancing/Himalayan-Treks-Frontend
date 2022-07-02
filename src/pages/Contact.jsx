import React from "react";
import ContactCard from "../components/ContactCard";
import BookNow from "../components/Forms/BookNow";
import "./styles/treks.css";
import MapContainer from "../components/Maps"
function Contact() {
  return (
    <div>
      <div className="trekHeader">
        <div className="layer">
          <h2>Feel Free To <span className="duo">Contact Us!</span></h2>
          
        </div>
      </div>
      <section className="BooknMap">
      <div className="BOOKCARD">
        <ContactCard/>
        <BookNow/>
      </div>
      <div className="MAP">
        <MapContainer/>
      </div>
      </section>
    </div>
  );
}

export default Contact;

