// src/components/NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ toggleDarkMode, increaseTextScaling, decreaseTextScaling }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownLocked, setDropdownLocked] = useState(false);

  const toggleDropdown = () => {
    if (!isDropdownLocked) {
      setDropdownOpen(!isDropdownOpen);
    }
  };

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const lockDropdown = () => {
    setDropdownLocked(true);
  };

  const unlockDropdown = () => {
    setDropdownLocked(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-button">Home</Link>
        <div
          className={`nav-dropdown ${isDropdownOpen ? 'clicked' : ''} ${isDropdownLocked ? 'locked' : ''}`}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <button className="dropdown-button" onClick={toggleDropdown} onMouseEnter={unlockDropdown} onMouseLeave={lockDropdown}>
            Menu {isDropdownOpen ? '▲' : '▼'}
          </button>
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`} onClick={closeDropdown}>
            <Link to="/page1">Visual</Link>
            <Link to="/page2">Auditory</Link>
          </div>
        </div>
      </div>
      <div className="nav-right">
        <button className="nav-button" onClick={toggleDarkMode}>
          Dark Mode
        </button>
        <button className="nav-button" onClick={increaseTextScaling}>
          Increase Text Size
        </button>
        <button className="nav-button" onClick={decreaseTextScaling}>
          Decrease Text Size
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
