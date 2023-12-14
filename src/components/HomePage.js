import React from 'react';
import Tile from './Tile';
import { Link } from 'react-router-dom';

import bodyImage from '../images/body.png';
import eyeImage from '../images/eye.png';
import brainImage from '../images/brain.png';
import speechImage from '../images/speech.png';
import earImage from '../images/ear.png';

  const HomePage = ({ textScaling, darkMode }) => {
    const textStyle = {fontSize: `${16 * textScaling}px`,};
    const titleStyle = {fontSize: `${22 * textScaling}px`,};

    const articles = [
      {
        title: 'Understanding Visual Impairments',
        imageSrc: eyeImage,
        description: 'A visual impairment refers to a limitation in a persons ability to see.',
        link: '/Visual',
      },
      {
        title: 'Understanding Auditory Disabilities',
        imageSrc: earImage,
        description: 'Auditory Disabilities reflect a users ability to hear content. ',
        link: '/Auditory',
      },
      {
        title: 'Understanding Language Barriers',
        imageSrc: speechImage,
        description: 'Language is another key form of accessibility which allows for people arround the globe to interact.',
        link: '/Language',
      },
    ];

    const YouTubeVideo = () => {
      return (
        <div>
          <iframe
            width="420"
            height="250"
            src="https://www.youtube.com/embed/tcGl9eH6pMI?si=vA_O95lqWT0o3tYr"
            title="Why Web Accessibility is Essential"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
      );
    };


    return (
      <div className="page-container">
        <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle}>Welcome to the hub for learning Web Accessability</h1>
        <div className="paragraph-box">
          <div className="grid">
            <div class="video-container">
              <YouTubeVideo/>
            </div>
            <div className="video-text-container">
              <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
              Here at Web For Everyone, we want you to embark on a journey to demystify the concept of web 
              accessibility and bring it to life. Our mission goes beyond mere education; we aim to 
              showcase accessibility in action.          
              </p>
            </div>
          </div>
            <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
            What is Web Accessability? At its core, accessibility is the belief that the internet should 
            be a space for everyone, irrespective of their abilities or disabilities. It is our creed 
            that anyone and everone should be able to use the web. This involves not just understanding 
            the principles but implementing tools and features that empower individuals to navigate and 
            contribute to the online world seamlessly. Join us in creating a digital realm that truly 
            leaves no one behind, where the web becomes a place where inclusion is not just a philosophy 
            but a tangible reality.
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