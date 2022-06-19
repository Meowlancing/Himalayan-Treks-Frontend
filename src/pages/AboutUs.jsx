import React from 'react'
import NavbarCompo from '../components/Navbar'
import "./styles/about.css"
import AboutHeaderImg from "../Assets/AboutHeader.jpg"
import Explore from "../Assets/EXPLORE.png"
import { Card, Button, } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking } from '@fortawesome/free-solid-svg-icons'

const AboutUs = () => {
  return (
    <div>
        <NavbarCompo/>
        <div className='AboutHeader'>
            <img src={AboutHeaderImg}></img>
        </div>
        <div className='AbtUsContainer'>
            <div className='AbtUS'>
                <span className='bar1'></span>
                <h3>About Us</h3>
                <h2>Fully dedicated <br/> to provide best <br/> <span className='trekspan'>trekking experience</span></h2>
                <p>Himalayan Dreamtreks is a mission-driven outdoor adventure <br/> company. The aim is to make destinations that aren't always <br/> found on standard maps available to people who enjoy visiting <br/> new locations. Outdoors Enthusiasts will enjoy some of the best <br/> outdoor travel opportunities in the Indian Himalayas – lush <br/> valleys, craggy mountains, high altitude cold deserts, winding <br/> rivers, thick forests – a smorgasbord of sensory experiences <br/> that can only be found in the outdoors.</p>
            </div>
            <div className='ExploreImg'>
                <img src={Explore}/>
            </div>
        </div>
        <div className='WhyUs'>
            <h2>Why <span>Choose</span> Us </h2>
            <section className='cards'>
            <Card style={{ width: '20rem', height:"20rem", textAlign:"center" }} className="CardSec">
                    <div className='icons'>
                        <FontAwesomeIcon icon={faHiking} className="icon" />
                    </div>
                     <Card.Body>
                         <Card.Title>Exp. Trek Guide </Card.Title>
                            <Card.Text className='purpose'>
                                 We are a community of people from the Indian Himalayas, mostly from different villages. We have a team of qualified and professional guides/trip leaders on board. The majority of the instructors have received their training from well-known mountain schools. 
                            </Card.Text>
                     </Card.Body>
            </Card>
            <Card style={{ width: '20rem', height:"20rem", textAlign:"center" }} className="CardSec">
                    <div className='icons'>
                        <FontAwesomeIcon icon={faHiking} className="icon" />
                    </div>
                     <Card.Body>
                         <Card.Title>Exp. Trek Guide </Card.Title>
                            <Card.Text className='purpose'>
                                 We are a community of people from the Indian Himalayas, mostly from different villages. We have a team of qualified and professional guides/trip leaders on board. The majority of the instructors have received their training from well-known mountain schools. 
                            </Card.Text>
                     </Card.Body>
            </Card>
            <Card style={{ width: '20rem', height:"20rem", textAlign:"center" }} className="CardSec">
                    <div className='icons'>
                        <FontAwesomeIcon icon={faHiking} className="icon" />
                    </div>
                     <Card.Body>
                         <Card.Title>Exp. Trek Guide </Card.Title>
                            <Card.Text className='purpose'>
                                 We are a community of people from the Indian Himalayas, mostly from different villages. We have a team of qualified and professional guides/trip leaders on board. The majority of the instructors have received their training from well-known mountain schools. 
                            </Card.Text>
                     </Card.Body>
            </Card>
            </section>

            <div className='Moments'>
                <h2>Memorable <span style={{color:"#ff6060"}}>Moments</span></h2>
                <div className='ImgGallery'>
                     
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs