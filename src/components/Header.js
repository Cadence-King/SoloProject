// src/components/Header.js
import React from 'react';

// Import your logo image
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Display the logo */}
        <img src={logo} alt="Logo" className="logo" />
        <h1>Web Accessability Basics</h1>
      </div>
    </header>
  );
};

export default Header;