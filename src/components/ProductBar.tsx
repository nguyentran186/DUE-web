import { useNavigate } from 'react-router-dom';
import '../styles/ProductBar.css';

const ProductBar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/product-item');
  };

  return (
    <div className="product-bar">
        <h2>All Products</h2>  
    <div className="product-container">
      <div className="filter-sidebar">
        <div className='filter-container'>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products"
            className="search-input"
          />
        </div>
        <div className="filters">
          <h3>Price Range</h3>
          <div className="checkbox-wrapper-1">
            <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-1">Under 100,000</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-2" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-2">From 100,000 to 500,000</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-3" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-3">From 500,000 to 1,000,000</label>
            </div>
        </div>

        <div className="filters">
          <h3>Product Color</h3>
          <div className="checkbox-wrapper-1">
            <input id="example-4" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-4">Black</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-5" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-5">White</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-6" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-6">Yellow</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-7" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-7">Red</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-8" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-8">Other</label>
            </div>
        </div>

        <div className="filters">
          <h3>Product Type</h3>
          <div className="checkbox-wrapper-1">
            <input id="example-9" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-9">Soft Box</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-10" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-10">Hard Box</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-11" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-11">With Handle</label>
            </div>
        </div>

        <div className="filters">
          <h3>Size (cm)</h3>
          <div className="checkbox-wrapper-1">
            <input id="example-12" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-12">24x35</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-13" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-13">30x45</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-14" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-14">40x55</label>
            </div>
          <div className="checkbox-wrapper-1">
            <input id="example-15" className="substituted" type="checkbox" aria-hidden="true" />
            <label htmlFor="example-15">Other</label>
            </div>
        </div>
        <div className='filter-button'>
            <button className="button-42">Filter Products</button>
        </div>
        </div>
      </div>
    <div className='product-sidebar'>
      <div className="product-list">
      <div className="product-grid">
    {/* Example product cards */}
        {[...Array(9)].map((_, index) => {
          const randomNumber = Math.floor(Math.random() * 6) + 3; // Generates a number between 3 and 8
          return (
            <div className="product-card-bar" key={index}>
              <img src={`/DUE-web/images/feature${randomNumber}.jpeg`} alt="Product" />
              <p className="product-size">24x35cm</p>
              <p className="product-name">Premium Paper Packaging</p>
              <p className="product-price">Contact for price</p>
              <div className='product-footer'>
                <p className="product-quant">Sold 100</p>
                <button className="add-to-cart" onClick={handleNavigation}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
        <div className="pagination">
          <button className="pagination-btn">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">4</button>
          <button className="pagination-btn">5</button>
        </div>
      </div>
    </div>
    </div>  
    </div>
  );
};

export default ProductBar;