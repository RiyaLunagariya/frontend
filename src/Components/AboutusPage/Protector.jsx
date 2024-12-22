import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Protector.css";
import img from "../../Images/image (1).png"

function Protector() {
  return (
    <div className="about-section">
      {/* <Container> */}
        <h2 className="section-title-p">About Immune Protector</h2>
        <Row className="center">
          <Col md={5}>
            <img
              src={img}
              alt="About Immune Protector"
              className="about-image"
            />
          </Col>
          <Col md={7}>
            <p className="about-text">
              At Immune Protector, we believe that better health is the foundation of a vibrant life. 
              Founded with the mission to provide natural, science-backed immunity solutions, 
              our journey started with a simple idea: to create high-quality supplements that 
              empower the body’s natural defense, boost energy, and promote overall wellness.
            </p>
            <p className="about-text">
              We understand that a strong immune system is essential for thriving in today’s 
              demanding lifestyle. That’s why we combine the latest in wellness science and research 
              to deliver powerful, effective, and safe immunity-boosting products. Our values—quality, 
              sustainability, and customer well-being—are at the heart of everything we do.
            </p>
          </Col>
        </Row>
      {/* </Container> */}
    </div>
  );
}

export default Protector;
