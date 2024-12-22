import React from 'react';
import {Row, Col} from 'react-bootstrap';
import ProductCard from './Productcard';
import blue from "../../Images/Frame2122550743.png.png"
import pink from "../../Images/Frame2122550743.png (1).png"
import green from "../../Images/Frame2122550743.png (2).png"
import orange from "../../Images/Frame2122550743.png (3).png"
import red from "../../Images/Frame2122550743.png (4).png"
import light from "../../Images/Frame2122550743.png (5).png"

const products = [
  {
    image: blue,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    image: pink,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    image: green,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    image: orange,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    image: red,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    image: light,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    image: blue,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    image: pink,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
];

const Productgrid = () => {
  return (
    // <Container>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={6} sm={6} md={4} lg={3}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    // </Container>
  );
};

export default Productgrid;
