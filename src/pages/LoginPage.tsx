import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/LoginPage.css';

const LoginHomePage: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigation function

  const handleNavigate = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Hello!</h1>
      <p className="login-subtitle-single-line">
        Welcome to <span className="login-subtitle-bold">ON IDEAS</span>
      </p>
      <div className="button-group">
        <button
          className="button-78"
          role="button"
          onClick={() => handleNavigate('/login')} // Navigate to Login page
        >
          Đăng nhập
        </button>
        <button
          className="button-78"
          role="button"
          onClick={() => handleNavigate('/signup')} // Navigate to Signup page
        >
          Đăng ký
        </button>
      </div>
      <p className="access-without-login">Truy cập không cần đăng nhập</p>
    </div>
  );
};

export default LoginHomePage;
