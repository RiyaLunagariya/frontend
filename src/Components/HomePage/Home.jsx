import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import img from "../../Images/Heading 6_mask-group.png"

const Home = () => {
  return (
    <div className="hero-section text-center bg-light py-5">
      <Row>
        <Col md={6} className="text-left">
        <img src={img} alt="img" className="img"/>
          <h1><span>Boost Your</span> Immunity<span>,</span> <br /><span>Boost Your</span> Life!</h1>
          <p>Immune Protector – The Ultimate Immunity Booster for Men</p>
          <Button className="hero-button">Shop Now <FaArrowRight className="arrow-icon" /></Button>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
