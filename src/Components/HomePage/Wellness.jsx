import React from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import './Wellness.css';
import productImage from "../../Images/blue img.png"; 
import Image from "../../Images/Container.png";

const Wellness = () => {
  return (
    <Container fluid className="wellness-journey-container">
      <Row>
        <Col md={7} className="left-section">
          <h2 className="w-title">Begin your wellness journey with Immune Protector!</h2>
          <p className="w-subtitle">
            Presenting our range of natural products, thoughtfully designed to boost your love life and improve your overall wellness.
          </p>
          <Card className="Wellness-card">
            <Row className="align-items-center">
              <Col md={3} className="w-img">
                <Card.Img src={productImage} className="Wellness-image" alt="Product" />
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Title className="Wellness-title">IMMUNE PROTECTOR</Card.Title>
                  <Card.Text className="Wellness-subtitle">
                    Natural Testosterone Booster
                  </Card.Text>
                  <Card.Text className="Wellness-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Card.Text>
                  <div className="Wellness-price-container">
                    <span className="Wellness-price">₹1499</span>
                    <span className="Wellness-original-price">₹1899</span>
                    <span className="Wellness-discount">20% off</span>
                  </div>
                </Card.Body>
              </Col>
            </Row>
            <Button variant="link" className="view-details-btn">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
</Button>
          </Card>
        </Col>
        <Col md={5} className="right-section">
          <img src={Image} alt="with&without" className="forimmune" />
        </Col>
      </Row>
    </Container>
  );
};

export default Wellness;
