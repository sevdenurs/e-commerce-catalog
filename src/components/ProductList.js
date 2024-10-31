import React from 'react';
import products from '../data/products';
import Product from './Product';
import './ProductList.css';

function ProductList() {
  return (
    <div className="product-list">
      <h2>Product Catalog</h2>
      {products.map(product => (
        <Product
          key={product.id}          // Benzersiz bir anahtar (key) olarak id kullanıyoruz.
          id={product.id}            // Product bileşenine id özelliğini gönderiyoruz.
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
