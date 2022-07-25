import React, { useState } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { ImCross } from "react-icons/im";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import "./styles/wpbutton.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const WPbuttons = () => {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  return (
    <div className="contacts">
      {click && (
        <div>
          <div className="socialBtn">
            <span title="WhatsApp">
              <FaWhatsapp />
            </span>
          </div>
          <div className="socialBtn">
            <span >
              <FaPhone />
            </span>
          </div>
        </div>
      )}

      <Button className={click ? "redBtn"  : "wpBtn"} onClick={handleClick}>
        {click ? <ImCross /> : <MdMessage />}
      </Button>
    </div>
  );
};

export default WPbuttons;
