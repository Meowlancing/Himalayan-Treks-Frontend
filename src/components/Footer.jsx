import { React, useEffect, useState } from "react";
import "./styles/footer.css";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faArrowRight,
  faMobileAndroid,
  faMailBulk,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../Assets/himalayan_exploration-Logo.png";

function Footer() {
  var date = new Date();

  const [data, setData] = useState([]);
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "https://himalyan-explorations.herokuapp.com/api/treksList",
      });
      setData(resp.data);
    } catch (err) {
      console.log("Something went wrong");
      return [];
    }
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Footer">
      <section className="cards">
        <Card className="CardSec">
          <div className="icons"></div>
          <Card.Body>
            <Card.Title className="title">
              <img
                src={Logo}
                style={{ width: "50px", height: "50.8px" }}
              ></img>
            </Card.Title>
            <Card.Text className="purpose">
              Himalayan Dreamtreks is a <br />
              mission-driven outdoor <br />
              adventure company. The aim <br />
              is to make destinations that <br />
              aren’t always found on <br />
              standard maps available to <br />
              people who enjoy visiting new <br />
              locations.
              <div className="socialsicons"></div>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="CardSec">
          <div className="icons">
            <FontAwesomeIcon className="icon" />
          </div>
          <Card.Body>
            <Card.Title className="title">Important Links </Card.Title>
            <Card.Text className="purpose">
              {data.map((item) => {
                return (
                  <>
                    <Link
                      to={"/treks-" + `${item.title}`}
                      state={{ prop: item }}
                      style={{textDecoration: "none"}}
                    >
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>{" "}
                      {item.title}
                    </Link>
                    <br />
                  </>
                );
              })}{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="CardSec">
          <div className="icons">
            <FontAwesomeIcon className="icon" />
          </div>
          <Card.Body>
            <Card.Title className="title">Contact Details</Card.Title>
            <Card.Text className="purpose">
              <h5>
                <span>
                  <FontAwesomeIcon
                    style={{ color: "#fff" }}
                    icon={faMobileAndroid}
                  />
                </span>
                Phone No.
              </h5>
              <p>
                +91- 9021779329
                <br />
              </p>
              <h5>
                <span>
                  <FontAwesomeIcon
                    style={{ color: "#fff" }}
                    icon={faMailBulk}
                  />
                </span>
                Email
              </h5>
              <p>info.thehimalayan@gmail.com</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="CardSec">
          <div className="icons">
            <FontAwesomeIcon className="icon" />
          </div>
          <Card.Body>
            <Card.Title className="title">Office Address</Card.Title>
            <Card.Text className="purpose">
              <h5>
                <span>
                  <FontAwesomeIcon
                    style={{ color: "#fff" }}
                    icon={faLocation}
                  />
                </span>
                Address
              </h5>
              <p>
                Adarsh Cyber Cafe, near Nagar <br /> Palika Office,
                Chinyalisour, <br /> Uttarakhand 249196
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
      <div className="caption">
        <h4>
          ©All rights reserved {date.getFullYear()} @Himalyan Explorations
        </h4>{" "}
        <a style={{textDecoration:"none"}} target="_blank" href="https://pracharmore.com/">Designed and Developed By PracharMore</a>
      </div>
    </div>
  );
}

export default Footer;
