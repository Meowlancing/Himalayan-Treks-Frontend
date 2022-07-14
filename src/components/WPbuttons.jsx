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
    <div style={{position:"fixed", zIndex:"100", marginLeft:"75vw"}}>
      <CircleMenu style={{color:"#0f0"}}
        startAngle={-90}
        rotationAngle={360}
        itemSize={2}
        radius={5}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip="Email"
          tooltipPlacement={TooltipPlacement.Right}
        >
          <FaPhone />
        </CircleMenuItem>
        <CircleMenuItem tooltip="Help">
          <FaWhatsapp />
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};

export default WPbuttons;
