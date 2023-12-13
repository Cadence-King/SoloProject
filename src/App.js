import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import Visual from './components/Visual';
import Auditory from './components/Auditory';
import Language from './components/Language';

import { HashLink as Link } from 'react-router-hash-link';
import TableOfContents from './components/TableOfContents'; // Import the TableOfContents component


function App() {
  const [textScaling, setTextScaling] = useState(1);

  // Toggle dark mode
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode ? JSON.parse(storedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return newMode;
    });
  }; 
  
  // Increase text scaling
  const increaseTextScaling = () => {
    setTextScaling(textScaling + 0.2);
  };

  // Decrease text scaling
  const decreaseTextScaling = () => {
    setTextScaling(textScaling - 0.2);
  };


  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
          <Header />
          <NavigationBar
            toggleDarkMode={toggleDarkMode}
            increaseTextScaling={increaseTextScaling}
            decreaseTextScaling={decreaseTextScaling}
          />
          <Routes>
            <Route path="/" element={<HomePage textScaling={textScaling} />} />
            <Route path="/Visual" element={<Visual textScaling={textScaling} />} />
            <Route path="/Auditory" element={<Auditory textScaling={textScaling} />} />
            <Route path="/Language" element={<Language textScaling={textScaling} />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;