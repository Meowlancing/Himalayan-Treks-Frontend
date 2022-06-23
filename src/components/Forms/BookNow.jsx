import React from "react";
import { Col, Form, Row } from "react-bootstrap";

function BookNow() {
  function handleFormData() {
    console.log("yo");
  }

  return (
    <>
      <div className="bookNow">
        <Row>
          <Col lg="6">
            <Form>
              <h2>Fill Your Query</h2>
              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Name"
                  className="inputs"
                  onChange={handleFormData}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Email"
                  type="email"
                  className="inputs"
                  onChange={handleFormData}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Phone No"
                  className="inputs"
                  onChange={handleFormData}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  placeholder="Message"
                  as="textarea"
                  rows={6}
                  className="inputs"
                  onChange={handleFormData}
                />
              </Form.Group>
            </Form>
          </Col>

          <Col>
            {/* google map integration  */}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default BookNow;
