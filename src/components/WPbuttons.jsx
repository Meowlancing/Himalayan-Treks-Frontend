import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import "./styles/wpbutton.css"
const WPbuttons = () => {
  return (
    <div className="contacts">
      <CircleMenu
        startAngle={180}
        rotationAngle={180}
        itemSize={2}
        radius={5}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip="Phone Number"
          tooltipPlacement={TooltipPlacement.Right}
        >
          <FaPhone />
        </CircleMenuItem>
        <CircleMenuItem tooltip="WhatsApp">
          <FaWhatsapp />
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};

export default WPbuttons;
