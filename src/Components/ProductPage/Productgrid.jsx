import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './Productcard';
import { useNavigate } from 'react-router-dom';
import blue from "../../Images/Frame2122550743.png.png";
import pink from "../../Images/Frame2122550743.png (1).png";
import green from "../../Images/Frame2122550743.png (2).png";
import orange from "../../Images/Frame2122550743.png (3).png";
import red from "../../Images/Frame2122550743.png (4).png";
import light from "../../Images/Frame2122550743.png (5).png";

// Export the products array
export const products = [
  {
    id: 1,
    image: blue,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    id: 2,
    image: pink,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    id: 3,
    image: green,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    id: 4,
    image: orange,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    id: 5,
    image: red,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    id: 6,
    image: light,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    id: 7,
    image: blue,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
  {
    id: 8,
    image: pink,
    title: 'Natural Testosterone Booster',
    price: 1499,
    discountPrice: 1899,
    reviews: 134,
    rating: 4.8,
  },
];

const Productgrid = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Row>
      {products.map((product, index) => (
        <Col key={index} xs={6} sm={6} md={4} lg={3}>
          <div onClick={() => handleProductClick(product.id)}>
            <ProductCard {...product} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Productgrid;
