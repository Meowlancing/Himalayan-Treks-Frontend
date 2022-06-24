import React from 'react'
import "./styles/footer.css"
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
function Footer() {
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
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon icon={faHiking} className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Affordable Rates </Card.Title>
              <Card.Text className="purpose">
                We believe in affordable trekking, not money-making. Our founder
                Sobhinder Singh believes in making relationships, not gaining
                profit. Due to in-house equipment & an in-house team, we are
                able to provide affordable rates to our clients. Due to these
                reason clients love us.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon icon={faHiking} className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Best Equipments</Card.Title>
              <Card.Text className="purpose">
                To ensure great delivery, our team is ably supported by our
                infrastructure. We have a large fleet of rafts, service
                vehicles, imported cycles, top-of-the-line camping and climbing
                equipment, as well as offices to assist you in planning and
                booking your trips.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="CardSec">
            <div className="icons">
              <FontAwesomeIcon icon={faHiking} className="icon" />
            </div>
            <Card.Body>
              <Card.Title className="title">Best Equipments</Card.Title>
              <Card.Text className="purpose">
                To ensure great delivery, our team is ably supported by our
                infrastructure. We have a large fleet of rafts, service
                vehicles, imported cycles, top-of-the-line camping and climbing
                equipment, as well as offices to assist you in planning and
                booking your trips.
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
    </div>
  )
}

export default Footer