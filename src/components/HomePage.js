// src/components/HomePage.js
import React from 'react';
import Tile from './Tile';
import { Link } from 'react-router-dom';


import bodyImage from '../images/body.png';
import eyeImage from '../images/eye.png';
import brainImage from '../images/brain.png';
import speechImage from '../images/speech.png';
import earImage from '../images/ear.png';

  const HomePage = ({ textScaling, darkMode }) => {
    //const containerClassName = darkMode ? 'dark-mode' : '';

    const textStyle = {
      fontSize: `${16 * textScaling}px`, // Adjust text size based on textScaling
      color: darkMode ? '#fff' : '#333', // Adjust text color based on darkMode
    };
    const TitleStyle = {
      fontSize: `${22 * textScaling}px`, // Adjust text size based on textScaling
      color: darkMode ? '#fff' : '#333', // Adjust text color based on darkMode
    };

    const articles = [
      {
        title: 'Understanding Visual Impairments',
        imageSrc: eyeImage,
        description: 'A visual impairment refers to a limitation in a persons ability to see. Click here to learn more.',
        link: '/page1',
      },
      {
        title: 'Understanding Auditory Disabilities',
        imageSrc: earImage,
        description: 'Auditory Disabilities reflect a users ability to hear content. Click here to learn more.',
        link: '/page2',
      },
      // Add more articles
    ];

    const pageContainerStyle = {
      backgroundColor: darkMode ? '#000' : '#ebbebe', // Adjust background color based on darkMode
    };

    const YouTubeVideo = () => {
      return (
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tcGl9eH6pMI?si=vA_O95lqWT0o3tYr"
            title="YouTube Video"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
      );
    };


    return (
      <div className="page-container" style={pageContainerStyle}>
        <h1 style={TitleStyle}>Welcome to the hub for learning Web Accessability</h1>
        <div className="paragraph-box">
          <div class="video-container">
            <YouTubeVideo/>
          </div>
          <p style={textStyle}>
          Welcome to our website, where we embark on a journey to demystify the concept of web 
          accessibility and bring it to life. Our mission goes beyond mere education; we aim to 
          showcase accessibility in action.          
          </p>
          <p style={textStyle}>
          At its core, accessibility is the belief that the internet should be a space for everyone, 
          irrespective of their abilities or disabilities. This involves not just understanding 
          the principles but implementing tools and features that empower individuals to navigate 
          and contribute to the online world seamlessly. Join us in creating a digital realm that 
          truly leaves no one behind, where the web becomes a place where inclusion is not just a 
          philosophy but a tangible reality.          
          </p>
         
        </div>

        <div className="grid">
          {articles.map((article, index) => (
          <Tile
            key={index}
            title={article.title}
            imageSrc={article.imageSrc}
            description={article.description}
            link={article.link}
          />
          ))}
        </div>


      </div>
    );
  };


export default HomePage;