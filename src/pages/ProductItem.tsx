import Navbar from '../components/Navbar';
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import ProductShowcase from '../components/ProductShowcase';
import ReviewSection from '../components/ReviewSection';
import '../styles/ProductItem.css'; // CSS file for styling
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductItem = () => {
  const { addProduct } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    const newProduct = {
      id: Date.now(), // Use a unique ID
      name: 'Premium Paper Packaging Type 1',
      price: 1000000,
      color: 'White',
      quantity: 1,
      image: '/DUE-web/images/product.png',
    };
    addProduct(newProduct);

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="product-page-container">
        <Navbar />

        {/* Search Bar and Section */}
      <div className="search-bar-section">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
        </div>
      </div>

        <div className='product-cover'>

      {/* Product Section */}
      <div className="product-section">
        {/* Product Image */}
        <div className="product-image">
          <img src="/DUE-web/images/product-big.png" alt="Product" />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1>PREMIUM PAPER PACKAGING TYPE 1</h1>
          <p>Sold: 100</p>

          <h3>Product Description</h3>
          <ul>
            <li>Product Type: Soft Box</li>
            <li>Size: 20x35cm</li>
            <li>Color: Black - Yellow - White</li>
            <li>Load Capacity: Under 3kg</li>
          </ul>

          <div className="quantity-section">
            <p>
            <span className="main-text">Quantity</span>
            <span className="unit-text">[unit: piece]</span>
            </p>

            <div className="quantity-options">
              <button>&lt;100</button>
              <button>100-500</button>
              <button>&gt;500</button>
            </div>
          </div>

          <div className="color-section">
            <p><span className="main-text">Color</span></p>
            <div className="color-options">
              <button>White</button>
              <button>Black</button>
              <button>Yellow</button>
            </div>
          </div>

          <button className="contact-button">Contact for Pricing</button>
          <button className="contact-button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <div className="info-box">
          <h3>Product Description</h3>
          <ul>
            <li>Product Type: Soft Box</li>
            <li>Size: 20x35cm</li>
            <li>Color: Black - Yellow - White</li>
            <li>Load Capacity: Under 3kg</li>
            <li>Usage: Suitable for storing food, fashion accessories, etc.</li>
          </ul>
        </div>

        <div className="info-box right">
          <h3>Purchase Policy</h3>
          <ul>
            <li>Return Policy</li>
            <li>Shipping Policy</li>
            <li>Payment Methods</li>
            <li>Shopping Guide</li>
          </ul>
          <p>Hotline: 0949 686 006</p>
        </div>
      </div>
      {showPopup && (
        <div className="notification-popup">
          Product has been added to the cart!
        </div>
      )}
        </div>
        <ReviewSection />
        <ProductShowcase />
    </div>
  );
};

export default ProductItem;
