import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Features.css";
import boost from "../../Images/medicine.svg.png";
import health from "../../Images/health-care.svg.png";
import beauty from "../../Images/beauty-care.svg.png";
import sexual from "../../Images/sexual.svg fill.png";
import fitness from "../../Images/fitness.svg.png";

const Features = () => {
  return (
    <div className="features-section">
      <h3 className="section-title">
        <span className="highlight"> Wh</span><span>y Choose</span> Immune Protector?
      </h3>
      <Row className="features-container">
        <Col md={2} sm={6} className="feature-box">
          <div className="feature-icon">
            <img src={boost} alt="Boosts Immunity" />
          </div>
          <p className="feature-text">Boosts immunity naturally</p>
        </Col>
        <Col md={2} sm={6} className="feature-box">
          <div className="feature-icon">
            <img src={health} alt="Increases Energy" />
          </div>
          <p className="feature-text">Increases energy levels</p>
        </Col>
        <Col md={2} sm={6} className="feature-box">
          <div className="feature-icon">
            <img src={beauty} alt="Supports Health" />
          </div>
          <p className="feature-text">Supports overall health and well-being</p>
        </Col>
        <Col md={2} sm={6} className="feature-box">
          <div className="feature-icon">
            <img src={sexual} alt="Natural Ingredients" />
          </div>
          <p className="feature-text">Formulated with natural ingredients</p>
        </Col>
        <Col md={2} sm={6} className="feature-box">
          <div className="feature-icon">
            <img src={fitness} alt="Men's Health" />
          </div>
          <p className="feature-text">Specially designed for men's health</p>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
