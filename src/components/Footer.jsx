import React from 'react'
import "./styles/footer.css"
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faArrowRight, faMobileAndroid, faMailBulk, faLocation,} from "@fortawesome/free-solid-svg-icons";
function Footer() {

  var date = new Date();
  return (
    <div className='Footer'>
      <section className="cards">
          <Card className="CardSec">
            <div className="icons">
            </div>
            <Card.Body>
              <Card.Title className="title"><img src='https://himalayandreamtreks.in/wp-content/uploads/2021/02/HDT-01.2.1-01-min-1024x332.png' style={{width:"105px", height:"50.8px"}}></img></Card.Title>
              <Card.Text className="purpose">
              Himalayan Dreamtreks is a <br/> 
              mission-driven outdoor <br/>
              adventure company. The aim <br/> 
              is to make destinations that <br/> 
              aren’t always found on <br/> 
              standard maps available to <br/> 
              people who enjoy visiting new <br/>
              locations.
              <div className='socialsicons'>
              </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon  className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Important Links </Card.Title>
              <Card.Text className="purpose">
                  <a href='' style={{textDecoration:"none"}}><span><FontAwesomeIcon icon={faArrowRight} /></span> Sahastra Tal Trek</a> <br/>
                  <a href='' style={{textDecoration:"none"}}><span><FontAwesomeIcon icon={faArrowRight} /></span> Kedartal Trek</a> <br/>
                  <a href='' style={{textDecoration:"none"}}><span><FontAwesomeIcon icon={faArrowRight} /></span> Kedarkantha Trek</a> <br/>
                  <a href='' style={{textDecoration:"none"}}><span><FontAwesomeIcon icon={faArrowRight} /></span> Bali Pass Trek</a> <br/>
                  <a href='' style={{textDecoration:"none"}}><span><FontAwesomeIcon icon={faArrowRight} /></span> Dayara Bugyal Trek</a> <br/>
                  <a href='' style={{textDecoration:"none"}}><span><FontAwesomeIcon icon={faArrowRight} /></span> Kuari Pass Trek</a> <br/>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon  className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Contact Details</Card.Title>
              <Card.Text className="purpose">
                    <h5><span><FontAwesomeIcon style={{color:"#fff"}} icon={faMobileAndroid} /></span>Phone No.</h5>
                    <p>+91-8089693825 <br/>
                       +91-6395932971
                    </p>
                    <h5><span><FontAwesomeIcon style={{color:"#fff"}} icon={faMailBulk} /></span>Email</h5>
                    <p>info@himalayandreamtreks.in</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon  className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Office Address</Card.Title>
              <Card.Text className="purpose">
                <h5><span><FontAwesomeIcon style={{color:"#fff"}} icon={faLocation} /></span>Address</h5>
                <p>Adarsh Cyber Cafe, near Nagar <br/> Palika Office, Chinyalisour, <br/> Uttarakhand 249196</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
        <div className='caption'><h4>©All rights reserved {date.getFullYear()} @Himalyan Explorations</h4>  <p>Designed and Developed By PracharMore</p></div>   
    </div>
  )
}

export default Footer