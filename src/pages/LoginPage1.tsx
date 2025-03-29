import React, { useState } from 'react';
import axios from 'axios'; // Add axios for HTTP requests
import '../styles/LoginPage1.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // To display error/success messages
  const [loading, setLoading] = useState(false); // To show loading state
  const [errorPopup, setErrorPopup] = useState<string>(''); // For handling error popup message

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Handle login functionality
  const handleLogin = async (e: React.FormEvent) => {
    window.location.href = '/';
    return
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setErrorPopup(''); // Reset error popup on each login attempt

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: username,
        password,
      });

      // If login is successful, you can store the token (for example in localStorage)
      localStorage.setItem('authToken', response.data.token);

      // Redirect to another page (like dashboard or home) after successful login
      // You can use useNavigate from react-router-dom to redirect
      window.location.href = '/'; // Example of redirecting

      setMessage('Login successful!');
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Hello!</h1>
      <p className="login-subtitle-single-line">
        Welcome to <span className="login-subtitle-bold">ON IDEAS</span>
      </p>
      <p className="login-subtitle-line">
        Login
      </p>

      <div className="login-form">
        <div className="login-input-container">
          <label htmlFor="username" className="input-label">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Tên tài khoản, email, số điện thoại"
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
          />
        </div>

        <div className="login-input-container">
          <label htmlFor="password" className="input-label">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Mật khẩu bao gồm 8 ký tự"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
        </div>

        <div className="button-group">
          <button className="button-79" onClick={handleLogin} disabled={loading}>
            {loading ? 'Logging...' : 'Access'}
          </button>
          {/* <button className="button-79" onClick={handleLogin} disabled={loading}>
            {loading ? 'Đang đăng nhập...' : 'Truy cập'}
          </button> */}
        </div>

        {message && <p className="login-message">{message}</p>}

        {/* Popup for incorrect login */}
        {errorPopup && (
          <div className="error-popup">
            <p>{errorPopup}</p>
            <button onClick={() => setErrorPopup('')} className="error-popup-close">X</button>
          </div>
        )}

        <p className="forgot-password">Forgot password?</p>
      </div>
    </div>
  );
};

export default LoginPage;
