// src/components/Hero.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNavigation = () => {
    navigate('/product'); // Replace '/product' with your desired path
  };

  return (
    <section className="hero">
      <div className="cta-box">
        <button className="button-33" onClick={handleNavigation}>
          Explore now
        </button>
      </div>
    </section>
  );
};

export default Hero;
