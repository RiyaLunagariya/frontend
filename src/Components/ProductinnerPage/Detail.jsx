import React from 'react';
import { useParams } from 'react-router-dom';
import ProductHeader from "../ProductinnerPage/Header";
import ProductFeatures from "../ProductinnerPage/ProductFeatures";
import ProductInfo from "../ProductinnerPage/ProductInfo";
import ProductFAQ from "../AboutusPage/Faq";
import ProductReviewForm from "../ProductinnerPage/ProductReviewForm";
import { products } from '../ProductPage/Productgrid'; // Correct import


const ProductDetailsPage = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Find the product that matches the ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>; // Handle product not found
  }

  return (
    <div className="product-details-page">
      {/* Product Header */}
      <ProductHeader product={product} />

      {/* Product Features */}
      <ProductFeatures />

      {/* Product Info */}
      <ProductInfo />

      {/* Product FAQ */}
      <ProductFAQ />

      {/* Product Review Form */}
      <ProductReviewForm />
    </div>
  );
};

export default ProductDetailsPage;
