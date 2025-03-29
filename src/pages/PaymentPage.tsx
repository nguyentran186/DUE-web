import Navbar from '../components/Navbar';
import '../styles/PaymentPage.css'; // Ensure CSS is linked
import PreFooter from '../components/PreFooter';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const PaymentPage = () => {
  const { products } = useCart();

  // Function to calculate total price
  const calculateTotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <div className='payment-page-container-whole'>
      <Navbar />

      <div className="payment-page-container">
        {/* Shipping Information */}
        <div className="shipping-info">
          <div className="shipping-info-header">
            <h2>Shipping Information</h2>
          </div>
          <form className='first-form'>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Address" />
            <div className="dropdown-group">
              <select>
                <option value="">Province/City</option>
              </select>
              <select>
                <option value="">District</option>
              </select>
              <select>
                <option value="">Ward/Commune</option>
              </select>
            </div>
          </form>

          <div className="shipping-method">
            <div className="shipping-method-header">
              <h3>Shipping Method</h3>
            </div>
            <form>
              <label>
                <input type="checkbox" className="select-item-checkbox" />
                Standard Delivery (2 - 5 business days)
                <span className="price">0 VND</span>
              </label>
            </form>
          </div>

          <div className="payment-method">
            <div className="payment-method-header">
              <h3>Payment Method</h3>
            </div>
            <form>
              <label>
                <input type="checkbox" className="select-item-checkbox" />
                Pay on Delivery (50% deposit required)
              </label>
              <label>
                <input type="checkbox" className="select-item-checkbox" />
                Bank Transfer
              </label>
              <label>
                <input type="checkbox" className="select-item-checkbox" />
                Credit Card
              </label>
            </form>
          </div>

          {/* Return to Cart Link */}
          <a href="#" className="return-to-cart">
            Return to Cart
          </a>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <div className="order-summary-header">
            <h2>Order Summary</h2>
          </div>
          <div className="order-items">
            {products.map((product) => (
              <div className="order-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <h4>{product.name}</h4>
                  <p>
                    <span>Color: {product.color}</span>
                    <span className='pad-left'>Qty: {product.quantity}</span>
                  </p>
                </div>
                <span className="price">
                  {(product.price * product.quantity).toLocaleString()} VND
                </span>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="order-total">
            <p>Subtotal<span>{calculateTotal().toLocaleString()} VND</span></p>
            <p>Shipping Fee<span>0 VND</span></p>
            <hr />
            <p className="total">Total<span>{calculateTotal().toLocaleString()} VND</span></p>
          </div>

          {/* Checkout Button */}
          <button className="checkout-button">PAY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
