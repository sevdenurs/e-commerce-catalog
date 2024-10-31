import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10)); // parseInt id için 10 tabanı ekledik

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p><strong>More details about this product will go here.</strong></p>
    </div>
  );
}

export default ProductDetails;
