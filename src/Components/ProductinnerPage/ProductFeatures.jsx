import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductFeatures.css";
import immunity from "../../Images/Immunity.png";
import energy from "../../Images/Energy.png";
import lotus from "../../Images/Lotus.png";

const ProductFeatures = () => {
  return (
    <Container fluid className="product-features">
      <Row>
        <Col md={4} className="feature">
          <div className="f-bg">
            <img src={immunity} alt="immunity" />
          </div>
          <h3>Boosts Immunity</h3>
        </Col>
        <Col md={4} className="feature">
          <div className="f-bg">
            <img src={energy} alt="energy" />
          </div>
          <h3>Increases Energy Levels</h3>
        </Col>
        <Col md={4} className="feature">
          <div className="f-bg">
            <img src={lotus} alt="lotus" />
          </div>
          <h3>Supports General Wellness</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductFeatures;
