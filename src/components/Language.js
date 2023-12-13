import React, { useEffect, useState } from 'react';
import TableOfContents from './TableOfContents';

const Language = ({ textScaling}) => {
  const textStyle = {fontSize: `${16 * textScaling}px`,};
  const titleStyle = {fontSize: `${22 * textScaling}px`,};

  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    const articleHeadings = Array.from(
      document.querySelectorAll('.page-container h1, .page-container h1, .page-container h3')
    );
    const headingsData = articleHeadings.map((heading) => ({
      id: heading.id,
      text: heading.textContent,
    }));
    setHeadings(headingsData);
  }, []);


  return (
    <div className="page-container">
     {headings && headings.length > 0 && (<TableOfContents headings={headings} setHeadings={setHeadings} />)}

      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-3-1">Language Accessibility: A Guide to Web Accessibility</h1>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
      In the ever-connected world of the internet, language should never be a barrier to accessing 
      information. Language accessibility is a vital aspect of creating a truly inclusive online 
      experience, ensuring that individuals of diverse linguistic backgrounds can engage with digital
       content seamlessly.
      </p>

      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-3-2">What is Language Accessibility?</h1>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
        Different languages often represent unique cultural perspectives, traditions, and values.
        Language is a key element in preserving and transmitting cultural heritage from generation
        to generation. It serves as a vehicle for expressing the intangible aspects of culture,
        such as folklore, myths, and rituals.
      </p>

    
      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-3-3"> The Importance of Language Accessibility </h1>
      <h2 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle}>1. Global Diversity</h2>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>The internet is a global space with users from different linguistic 
      backgrounds. Language accessibility acknowledges and accommodates this diversity.</p>
      <h2 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle}>2. Inclusive Communication</h2>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Making content available in multiple languages ensures that a broader 
      audience can understand and engage with the information, fostering inclusivity.</p>
      <h2 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle}>3. Reaching Untapped Audiences</h2>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Language accessibility opens doors to untapped markets and audiences, 
      providing opportunities for reaching users who may otherwise be excluded.</p>

      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-3-4"> Web Accessibility Guidelines for Language Inclusivity</h1>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>1. Multilingual Content:</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Design websites with the capability to present content in multiple languages.</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Clearly indicate language options, allowing users to select their preferred language easily.</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>2. Translatability:</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Use web technologies and coding practices that support translation and localization efforts.</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>3. Cultural Considerations:</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Ensure that content is culturally sensitive and that translations accurately convey the intended message.</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>4. Assistive Technology Compatibility:</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Test websites with assistive technologies that aid in language translation to ensure compatibility.</p>


      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-3-5"> The Impact of Language Accessibility</h1>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
      Language accessibility transcends linguistic boundaries, fostering a sense of belonging and 
      connection in the digital space. It not only facilitates communication but also enriches the 
      overall user experience. By prioritizing language inclusivity, you contribute to a web environment
       where information is truly for everyone, regardless of the languages they speak.
      </p>

      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-3-6">Conclusion </h1>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
      As we navigate the expansive digital landscape, let's recognize the power of language accessibility in 
      breaking down barriers and building bridges of understanding. By embracing multilingualism, cultural 
      sensitivity, and inclusive design practices, we pave the way for a more connected and accessible online
      world. Join us in championing language accessibility, where every user, regardless of their language 
      background, can participate fully in the digital conversation.
      </p>
    </div>
  );
};
export default Language;
