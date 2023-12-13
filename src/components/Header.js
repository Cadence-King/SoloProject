import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Web For Everyone</h1>
      </div>
    </header>
  );
};

export default Header;