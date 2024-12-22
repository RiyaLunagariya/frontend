import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
import photo from "../../Images/Mask Group.png"

function Contact() {
  return (
    <div>
      <Container fluid className="contact-container">
      <Row className="head">
  <Col md={10} className="position-relative">
    <img src={photo} alt="bg" className="background-img" />
    <h2 className="contact-heading">Contact Us</h2>
  </Col>
</Row>

        <Row className="talk">
          {/* Left Section */}
          <Col md={6}>
            <h4 className="contact-subheading">Let's talk with us</h4>
            <p className="contact-description">
            Questions, comments, or suggestions? Simply 
            <br /> fill in the form and we’ll be in touch shortly.
            </p>
            <p className="contact-detail">
              <i class="fa-solid fa-location-dot"></i> 1055 Arthur ave Elk
              Groot, 67.
              <br />&ensp;&ensp;&ensp;&nbsp; New Palmas South Carolina.
            </p>
            <p className="contact-detail">
              <i class="fa-solid fa-phone"></i> +1 234 678 9108 99
            </p>
            <p className="contact-detail">
              <i class="fa-regular fa-envelope"></i> contact@moralizer.com
            </p>
          </Col>

          {/* Right Section */}
          <Col md={6}>
            <Form className="contact-form">
              <Row className="name">
                <Col md={6} className="mb-4">
                  <Form.Group className="pe-2">
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="First Name*"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-4">
                  <Form.Group className="ps-2">
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Last Name*"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Control
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number*"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control
                  as="textarea"
                  className="form-control"
                  rows={4}
                  placeholder="Your message..."
                />
              </Form.Group>
              <Button
                type="submit"
                className="btn btn-primary contact-submit-btn"
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
