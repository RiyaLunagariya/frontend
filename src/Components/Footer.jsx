import React from "react";
import Logo from "../Images/immuneProtector1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import arw from "../Images/Vector (17).png";

function Footer() {
  return (
    <div className="footer-content">
      <div className="footer">
        {/* <Container> */}
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className="about">
              <img src={Logo} alt="logo" />
              <p>Stay tuned for latest updates and new features</p>
              <div className="email">
                <input type="email" placeholder="Email address"></input>
                <button>
                  <img src={arw} alt="arw"></img> <div>Subscribe</div>
                </button>
              </div>
              <div className="privacy">
                <input type="checkbox" className="checkbox"></input>
                <div>I accept terms and conditions & privacy policy</div>
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div className="links">
              <h4>Information</h4>
              <ul>
                <li>About Us</li>
                <li>Delivery information</li>
                <li>Privacy Policy</li>
                <li>Sales</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div className="links">
              <h4>Account</h4>
              <ul>
                <li>Dashboard</li>
                <li>My orders</li>
                <li>Account details</li>
                <li>Returns</li>
                <li>Wishlist</li>
              </ul>
            </div>
          </Col>

          <Col sm={12} md={6} lg={3}>
            <div className="social">
              <h4>About/Contacts</h4>
              <p>
              <i class="fa-solid fa-location-dot"></i>
                <div>
                  70 Washington Square South, New York, NY 10012, United States
                </div>
              </p>
              <p>
              <i class="fa-regular fa-envelope"></i>
                <div>immuneprotector@gmail.com</div>
              </p>
              <div className="social-icons">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </Col>
        </Row>
        {/* </Container> */}
      </div>
      <hr />
      <div className="copy">
        {/* <Container> */}
        <Row>
          <Col sm={12} md={6}>
            <p>Copyright 2024 Propham.All Rights Reserved</p>
          </Col>
          <Col sm={12} md={6}>
            <div className="text">
              Design & Develop with ❤️️ by - Illusio Designs
            </div>
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    </div>
  );
}

export default Footer;
