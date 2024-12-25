import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useCart } from "../CartPage/CartContext";
import { FaTrash, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, updateCartQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleGoToProductPage = () => {
    navigate("/products");
  };

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to Checkout page
  };

  const handleIncrement = (itemId) => {
    updateCartQuantity(itemId, 1); // Increase quantity by 1
  };

  const handleDecrement = (itemId) => {
    updateCartQuantity(itemId, -1); // Decrease quantity by 1
  };

  return (
    <Container className="msg">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty">
          <p>Your cart is empty😥. <br />Go to the product page and select a product!</p>
          <Button variant="primary" onClick={handleGoToProductPage}>
            Go to Products
          </Button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <Row key={item.id} className="cart-item">
              <Col md={2}>
                <img src={item.image} alt={item.title} className="img-fluid" />
              </Col>
              <Col md={5} className="item-details">
                <h5>{item.title}</h5>
                <p className="price">
                  ₹{item.price} <span className="mrp">M.R.P: <span className="underline">1700 </span>{item.mrp}</span>
                </p>
              </Col>
              <Col md={3} className="quantity-controls">
                <FaMinusCircle
                  className="quantity-icon"
                  onClick={() => handleDecrement(item.id)}
                />
                <div className="quantity">{item.quantity}</div>
                <FaPlusCircle
                  className="quantity-icon"
                  onClick={() => handleIncrement(item.id)}
                />
              </Col>
              <Col md={2} className="delete-icon">
                <FaTrash onClick={() => removeFromCart(item.id)} />
              </Col>
            </Row>
          ))}
          <h4>Subtotal: <b>₹{calculateSubtotal()}</b></h4>
          <div className="order">
            <p>Your order is eligible for free delivery</p>
          </div>
          <div className="checkout">
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
