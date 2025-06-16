import React from 'react';
import { products } from '../data/products';
import './ProductCards.css';

const ProductCards: React.FC = () => {
  return (
    <section className="product-section">
      <h2 className="section-title">Оньс системүүд</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image-container">
              <img
                src={product.img}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="product-content">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
