import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import remedy from "../../Images/Remedy.png";
import bowl from "../../Images/Bowl.png";
import medicines from "../../Images/Medicines time.png";
import './ProductInfo.css';

const ProductInfo = () => {
  return (
    <Container fluid className="product-info">
      <Row className='p-cards'>
        <Col md={4} className='p-box me-4'>
        <img src={remedy} alt="remedy" />
          <h4>Active Ingredient:</h4>
          <p>A potent blend to boost your immunity and energy levels daily.</p>
        </Col>
        <Col md={4} className='p-box me-4'>
        <img src={bowl} alt="bowl" />
          <h4>Inactive Ingredients:</h4>
          <p>A potent blend to boost your immunity and energy levels daily.</p>
        </Col>
        <Col md={4} className='p-box'>
        <img src={medicines} alt="medicines" />
          <h4>Dosage:</h4>
          <p>A potent blend to boost your immunity and energy levels daily.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductInfo;
