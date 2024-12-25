import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useCart } from "../CartPage/CartContext";
import "./Header.css";

const ProductHeader = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Use addToCart function from context

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Pass the product with the selected quantity
  };

  return (
    <Container fluid className="product-header">
      <Row className="p-info">
        <Col md={6} className="p-product-image-section">
          <div className="thumbnail-gallery">
            <img className="thumbnail" src={product.image} alt="thumbnail" />
            <img className="thumbnail" src={product.image} alt="thumbnail" />
            <img className="thumbnail" src={product.image} alt="thumbnail" />
          </div>
          <img
            className="p-main-image"
            src={product.image}
            alt={product.title}
          />
        </Col>

        <Col md={6} className="p-product-info-section">
          <h1 className="p-product-title">{product.title}</h1>
          <p className="p-product-price">₹{product.price}</p>
          <p className="p-product-description">
            A potent blend to boost your immunity and energy levels daily.
          </p>
          <p className="p-product-rating">
            ⭐⭐⭐⭐⭐ {product.rating}/<span>5</span>
          </p>

          <div className="p-quantity-counter">
            <button className="p-counter-btn" onClick={handleDecrease}>
              -
            </button>
            <span className="p-quantity">{quantity}</span>
            <button className="p-counter-btn" onClick={handleIncrease}>
              +
            </button>
            <div className="p-product-buttons">
              <Button
                variant="primary"
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button variant="success" className="buy-now-btn">
                Buy Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductHeader;
