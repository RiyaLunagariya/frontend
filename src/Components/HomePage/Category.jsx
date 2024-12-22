import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import "./Category.css";
import img1 from "../../Images/category.png";
import img2 from "../../Images/image (4).png";
import img3 from "../../Images/image (5).png";
import img4 from "../../Images/image (6).png";

const CategoriesSection = () => {
  const categories = [
    { name: "Hair Oil", img: img1 },
    { name: "Hair Mask", img: img2 },
    { name: "Hair Serum", img: img3 },
    { name: "Soap", img: img4 },
  ];

  return (
    <div className="categories-section py-5">
      <Container>
        <div className="section-header align-items-center mb-4">
          <h2 className="title">Shop By Category</h2>
          <button className="view-all-btn">
            View All < FaChevronRight className="chevron-icon-view" />
          </button>
        </div>
        <Row className="justify-content-center">
          {categories.map((category, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="category-col">
              <Card className="category-card">
                <div className="card-image-container">
                  <Card.Img
                    variant="top"
                    src={category.img}
                    alt={category.name}
                  />
                  <div className="category-name-overlay">
                    <div>{category.name}</div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoriesSection;
