import React from 'react';
import products from '../data/products';
import { Product, ProductCard } from './Product';
import './ProductList.css';

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h2>Product Catalog</h2>
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
}

export default ProductList;
