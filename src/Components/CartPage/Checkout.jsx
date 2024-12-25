import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useCart } from "../CartPage/CartContext"; // Import CartContext
import "./Checkout.css";

const Checkout = () => {
  const { cartItems } = useCart(); // Access cart items from the context

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container className="checkout-container">
      <Row className="display">
        <Col md={5} className="check-order-summary">
          {cartItems.map((item) => (
            <div key={item.id} className="product-summary">
              <img
                src={item.image}
                alt={item.title}
                className="check-product-image"
              />
              <div>
                <h6>{item.title}</h6>
                <p className="price">
                  ₹{item.price} x {item.quantity} = ₹
                  {item.price * item.quantity} <span className="check-mrp">M.R.P: <span className="underline">1700 </span>{item.mrp}</span>
                </p>
              </div>
            </div>
          ))}
          <div className="pricing-details">
            <p>
              Subtotal <div className="total">₹{calculateSubtotal()}</div>
            </p>
            <p>
              Shipping <div className="ship">Enter shipping address</div>
            </p>
            <h6 className="high">
              Total <div>₹{calculateSubtotal()}</div>
            </h6>
            <p className="tax-included">Including ₹{(calculateSubtotal() * 0.02).toFixed(2)} in taxes</p>
          </div>
        </Col>
        <Col md={6} className="contact-and-payment">
          <Form className="form">
            <div className="check">
              <h4>Contact</h4>
              <Button variant="primary" className="login">Log in</Button>
              </div>
            
            <Form.Group controlId="emailOrPhone">
              <Form.Control
                type="text"
                placeholder="Email or mobile phone number"
              />
            </Form.Group>
            <Form.Check type="checkbox" label="Email me with news and offers" />
            <h4>Delivery</h4>
            <Form.Group controlId="country">
        <Form.Label>Country/Region</Form.Label>
        <Form.Control as="select" defaultValue="India" className="custom-select">
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Australia</option>
        </Form.Control>
      </Form.Group>
            <Form.Group controlId="firstName">
              <Row>
                <Col className="me-2">
                  <Form.Control
                    type="text"
                    placeholder="First name (optional)"
                  />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Last name" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group controlId="apartment">
              <Form.Control
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
              />
            </Form.Group>
            <Form.Group controlId="city">
              <Row>
                <Col className="me-2">
                  <Form.Control type="text" placeholder="City" />
                </Col>
                <Col className="me-2">
                  <Form.Control type="text" placeholder="State" />
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="PIN code" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>
            <Form.Check
              type="checkbox"
              label="Save this information for next time"
            />
            <h3>Shipping method</h3>
            <Form.Group controlId="shippingMethod">
              <Form.Control
                type="text"
                placeholder="Enter your shipping address to view available shipping methods."
                disabled
              />
            </Form.Group>
            <h4>Payment</h4>
            <p>All transactions are secure and encrypted.</p>
            <Button variant="primary" className="cod-button">
              Cash on Delivery (COD)
            </Button>
            <h3>Billing address</h3>
            <Form.Check
              type="radio"
              name="billingAddress"
              label="Same as shipping address"
              defaultChecked
            />
            <Form.Check
              type="radio"
              name="billingAddress"
              label="Use a different billing address"
            />
            <Button variant="primary" className="pay-now-button">
              Pay Now
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
