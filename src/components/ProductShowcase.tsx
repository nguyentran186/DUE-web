import React from 'react';
import '../styles/ProductShowcase.css';

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Bag 1', image: '/DUE-web/images/feature1.jpg' },
  { id: 2, name: 'Bag 2', image: '/DUE-web/images/feature2.jpg' },
  { id: 3, name: 'Bag 3', image: '/DUE-web/images/feature3.jpeg' },
  { id: 4, name: 'Bag 4', image: '/DUE-web/images/feature4.jpeg' },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="product-showcase">
      <h1>Featured Products</h1>
      <div className="carousel-wrapper">
        <div className="carousel">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <h2>{product.name}</h2>
              <p>Contact</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
