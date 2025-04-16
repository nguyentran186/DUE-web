import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignupPage.css';

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); // New state for error messages

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error message on new submission

    try {
      // Update the API call to target the backend on port 5000
      const response = await axios.post('http://localhost:5000/api/auth/signup', { username, password, repassword });
      setMessage(response.data.message); // Display success message
    } catch (err) {
      // Use type guard or cast to handle `err` properly
      if (axios.isAxiosError(err)) {
        // Check if it's an Axios error
        if (err.response?.status === 400) {
          setError('Email has already been registered. Please use a different email.');
        } else {
          // Handle other Axios-specific errors
          setError('An error occurred. Please try again later.');
        }
      } else {
        // For non-Axios errors
        setError('An unknown error occurred.');
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
      <p className="login-subtitle-line">Sign Up</p>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-input-container">
          <label htmlFor="username" className="input-label">Username</label>
          <input
            id="username"
            type="email"
            placeholder="Email"
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
            required
          />
        </div>

        <div className="login-input-container">
          <label htmlFor="password" className="input-label">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password must be at least 8 characters"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
            required
          />
        </div>
        
        <div className="login-input-container">
          <label htmlFor="repassword" className="input-label">Confirm Password</label>
          <input
            id="repassword"
            type="password"
            placeholder="Password must be at least 8 characters"
            value={repassword}
            onChange={handleRePasswordChange}
            className="input-field"
            required
          />
        </div>

        <div className="button-group">
          <button className="button-79" type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </div>
      </form>

      {/* Displaying the success message */}
      {message && <p>{message}</p>}

      {/* Displaying the error message if email is already registered */}
      {error && <p style={{ color: 'white' }}>{error}</p>}
    </div>
  );
};

export default SignupPage;
