import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';


function Product({ id,name, price, description }) {
  return (
    <div className="product">
      <Link to = {`/products/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
}

export default Product;
