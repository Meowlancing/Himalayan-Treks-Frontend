import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import "./styles/bookNow.css";
import axios from "axios";

function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    no_of_people: "",
    message: "",
  });

  const handleFormData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    console.log(value);
    console.log(formData);
  };
 
  async function postData(){
    try{
      const res = await axios({
        method:"POST",
        url:"http://localhost:8000/api/bookNow",
        data: formData,
      });
      console.log(res);
      alert("Form submitted successfully");
    }
    catch(err){
      alert("Opps something went wrong");
      return [];
    }

  }


  return (
    <>
      <div className="bookNow">
        <Row>
          <Col lg="6" className="forms">
            <Form>
              <h2>
                Fill Your <span className="duo">Query</span>
              </h2>
              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Name*"
                  className="inputs"
                  onChange={handleFormData("name")}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Email*"
                  type="email"
                  className="inputs"
                  onChange={handleFormData("email")}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Phone No*"
                  className="inputs"
                  onChange={handleFormData("mobile")}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="No of people*"
                  className="inputs"
                  onChange={handleFormData("no_of_people")}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Message"
                  as="textarea"
                  rows={6}
                  className="inputs"
                  onChange={handleFormData("message")}
                />
              </Form.Group>
              <div style={{ textAlign: "center" }}>
                <Button className="formBtn" onClick={postData}>Submit</Button>
              </div>
            </Form>
          </Col>

          <Col>{/* google map integration  */}
          <GoogleMapReact  />
          </Col>
        </Row>
      </div>
    </>
  ); 
}

export default BookNow;
