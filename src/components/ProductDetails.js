import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";
import "./Product.css";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-description">{product.description}</p>
        <button 
          className="add-to-cart-button" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
