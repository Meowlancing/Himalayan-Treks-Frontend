import React from 'react'
import "./styles/trekcards.css"
const TREKCardCompo = (props) => {
  return (
    <div className='treks'>
        <div className="trekCard">
        <a href="/treks-id">
          <img src={props.img} />
        </a>
        <div className="topLeft">
          <span>{props.days} </span>
          <span>Days</span>
        </div>
        <div className="topRight">
          <span>Rs. </span>
          <span>{props.rate}</span>
        </div>
        <div className="bottom">
          <a href="/treks-id">
            <button className="trekName">Kedarkantha Trek </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TREKCardCompo