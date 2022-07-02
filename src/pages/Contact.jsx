import React from "react";
import ContactCard from "../components/ContactCard";
import BookNow from "../components/Forms/BookNow";
import "./styles/treks.css";
import MapContainer from "../components/Maps";
function Contact() {
  return (
    <div>
      <div className="trekHeader">
        <div className="layer">
          <h2>
            Feel Free To <span className="duo">Contact Us!</span>
          </h2>
        </div>
      </div>
      <section className="BooknMap">
        <div className="BOOKCARD">
          <ContactCard />
          <BookNow />
        </div>
        <div className="MAP">
          {/* <MapContainer/> */}
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Himalayan Treks, Chinyalisour&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
