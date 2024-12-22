import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Images/immuneProtector2.png";
import user from "../Images/solar_user-linear.png";
import cart from "../Images/mynaui_cart.png";

function NavbarComponent() {
  
  const url = window.location.pathname 
  const [activeLink, setActiveLink] = useState(url); 

  return (
    <Navbar  expand="lg" className="navbar fixed-navbar">
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/home"> 
          <img
            src={Logo}
            alt="logo"
            height="70"
          />
        </Navbar.Brand>

        {/* Toggler for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Navbar Section */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
          <Nav.Link as={Link} to="/home" className={`${activeLink === "/home" ? 'active-navbar-link' : ''}`} onClick={()=> setActiveLink('home')}>Home</Nav.Link> 
          <Nav.Link as={Link} to="/products" className={`${activeLink === "/product" ? 'active-navbar-link' : ''}`} onClick={()=> setActiveLink('product')}>Products</Nav.Link>
          <Nav.Link as={Link} to="/ingredients" className={`${activeLink === "/ingredients" ? 'active-navbar-link' : ''}`} onClick={()=> setActiveLink('ingredients')}>Ingredients</Nav.Link>
          <Nav.Link as={Link} to="/about" className={`${activeLink === "/about" ? 'active-navbar-link' : ''}`} onClick={()=> setActiveLink('about')}>How It Works</Nav.Link>
          <Nav.Link as={Link} to="/about-us" className={`${activeLink === "/about-us" ? 'active-navbar-link' : ''}`} onClick={()=> setActiveLink('about-us')}>About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact" className={`${activeLink === "/contact" ? 'active-navbar-link' : ''}`} onClick={()=> setActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          {/* User and Cart Icons */}
          <div className="icon">
            <div className="user">
              <img src={user} alt="user" height="30" />
            </div>
            <div className="cart">
              <img src={cart} alt="cart" height="30" />
            </div>
          </div>
        </Navbar.Collapse>
     
    </Navbar>
  );
}

export default NavbarComponent;
