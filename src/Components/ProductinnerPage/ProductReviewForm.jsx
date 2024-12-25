import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "./review.css";

const ProductReviewForm = () => {
  return (
    <Container fluid className="product-review-form">
      <h4 className="r-name">Add Your Review</h4>
      <Form className='r-form'>
        <Form.Group>
        <Form.Label className='label'>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group>
        <Form.Label className='label'>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group>
          <Form.Label className='label'>Rating:</Form.Label>
          <Form.Control as="select" className='select'>
            <option>☆☆☆☆☆</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Label className='label'>Review</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Write your comment here" />
        </Form.Group>
        <Button variant="primary" type="submit" className='submit'>Submit</Button>
      </Form>
    </Container>
  );
};

export default ProductReviewForm;
