import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import Page1 from './components/page1';
import Page2 from './components/page2';

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
    setTextScaling(textScaling + 0.1);
  };

  // Decrease text scaling
  const decreaseTextScaling = () => {
    setTextScaling(textScaling - 0.1);
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
          <Route path="/" element={<HomePage textScaling={textScaling} darkMode={darkMode}/>} />
          <Route path="/page1" element={<Page1 textScaling={textScaling} darkMode={darkMode}/>} />
          <Route path="/page2" element={<Page2 textScaling={textScaling} darkMode={darkMode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;