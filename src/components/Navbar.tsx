import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Logo (Image) */}
      <div className="logo">
        <Link to="/">
          <img src="/DUE-web/images/logo.png" alt="ON IDEAS Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" className="nav-item">
            Product
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-item">
            About us
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-item">
            News
          </Link>
        </li>
      </ul>


      {/* Navigation Icons */}
      <div className="nav-icons">
        <Link to="/profile"><i className="fas fa-user"></i></Link>
        <Link to="/favorites"><i className="fas fa-heart"></i></Link>
        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
      </div>
    </nav>
  );
};

export default Navbar;
