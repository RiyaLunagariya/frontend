import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from "../CartPage/CartContext";  // Cart context for adding to cart
import './ProductCard.css';

const ProductCard = ({ id, image, title, price, discountPrice, reviews, rating }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, image, title, price, discountPrice, reviews, rating });
  };

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={image} className="product-image-immune" />
      <Card.Body className="product">
        <Card.Title className="product-title">{title}</Card.Title>
        <Card.Subtitle className="product-subtitle">FOR: MEN</Card.Subtitle>
        <div className="product-pricing">
          <span className="current-price">₹{price}</span>
          <span className="original-price">₹{discountPrice}</span>
          <span className="discount">20% off</span>
        </div>
        <div className="product-rating">
          ⭐ {rating}/5 <span className="reviews">({reviews} Reviews)</span>
        </div>
        <Button className="pro-add-to-cart-btn" variant="primary" onClick={handleAddToCart}>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
