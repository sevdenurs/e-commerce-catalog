import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product({ id, name, price, description, image }) {
  return (
    <div className="product">
      <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
        <h3>{name}</h3>
        <img src={image} alt={name} className="product-image" />
      </Link>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
}

 // İkinci bileşen ismini ProductCard olarak değiştirdik
function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export { Product, ProductCard };

