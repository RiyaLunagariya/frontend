import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-box-wrapper">
      <div className="search-box-container">
        <h5 className="search-title">Search Product</h5>
        <Form className="search-box-form">
          <Row className="align-items-center">
            <Col md={3} className="pr-3">
              <Form.Select className="search-select">
                <option>All Category</option>
                <option>Magnesium</option>
                <option>Collagen</option>
                <option>Protein</option>
                <option>Sleep</option>
              </Form.Select>
            </Col>
            <Col md={6} className="px-3">
              <Form.Control
                type="text"
                placeholder="Enter keywords"
                className="search-input"
              />
            </Col>
            <Col md={3} className="pl-3">
              <Button type="submit" className="search-button">
                <i className="fas fa-search"></i> Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="home-icon-container">
        <FaChevronLeft className="nav-icon home-chevron-icon" />
      </div>

      <div className="home-icon-container">
        <FaChevronRight className="nav-icon home-chevron-icon" />
      </div>
    </div>
  );
};

export default Search;
