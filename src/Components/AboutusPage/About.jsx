import React from "react";
import {Row, Col, Button } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div className="about">
    <div className="header-section">
      {/* <Container> */}
        <Row>
          <Col md={6} className="header-text">
            <h1><span>Immune Protector -</span><br /> Men’s Immunity Booster <br />Supplement</h1>
            <p>
            Power Up Your Immunity, Power Up Your Life
            </p>
            <div className="info">
              Immune Protector is crafted to support men’s unique health needs, providing a robust defense against daily challenges. Formulated with powerful natural ingredients, this supplement is designed to help strengthen your immune system, increase energy levels, and promote overall well-being. Whether you’re managing a busy lifestyle or looking to maintain peak health, Immune Protector is here to fuel your day.
            </div>
            <Button className="header-button">Find out more</Button>
          </Col>
        </Row>
      {/* </Container> */}
    </div>
    </div>
  );
}

export default About;

