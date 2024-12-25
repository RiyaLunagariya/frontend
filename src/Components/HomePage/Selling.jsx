import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import img from "../../Images/blue img.png";
import "./Selling.css";

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: "Natural Testosterone Booster",
  subtitle: "FOR - MEN",
  price: "₹1499",
  originalPrice: "₹1899",
  discount: "20% off",
  rating: "4.8/5",
  reviews: "134 Reviews",
  imageUrl: img,
}));

const Selling = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentItems = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="best-selling-container">
      <h2 className="selling-title">
        <span className="ul">Our</span> Best Selling Product
      </h2>
      <div className="carousel-container">
        <button className="chevron chevron-left" onClick={handlePrev}>
          &#8249;
        </button>
        <Row className="carousel-row">
          {currentItems.map((product) => (
            <Col key={product.id} md={3} sm={6} xs={12} className="Selling-col">
              <Card className="Selling-card">
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  className="Selling-image"
                />
                <Card.Body>
                  <Card.Title className="Selling-title">
                    {product.name}
                  </Card.Title>
                  <Card.Subtitle className="Selling-subtitle">
                    {product.subtitle}
                  </Card.Subtitle>
                  <div className="Selling-price-container">
                    <span className="Selling-price">{product.price}</span>
                    <span className="Selling-original-price">
                      {product.originalPrice}
                    </span>
                    <span className="Selling-discount">{product.discount}</span>
                  </div>
                  <div className="Selling-rating">
                    ⭐ {product.rating}{" "}
                    <span className="reviews">({product.reviews})</span>
                  </div>
                  <Button variant="primary" className="add-to-cart-button">
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <button className="chevron chevron-right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <div className="dots-container">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${currentPage === index ? "active" : ""}`}
            onClick={() => setCurrentPage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Selling;
