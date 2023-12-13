import React, { useEffect, useState } from 'react';
import TableOfContents from './TableOfContents';

const Auditory = ({ textScaling}) => {
  const textStyle = {fontSize: `${16 * textScaling}px`,};
  const titleStyle = {fontSize: `${22 * textScaling}px`,};

  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    const articleHeadings = Array.from(
      document.querySelectorAll('.page-container h1')
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


      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-2-1">Understanding Auditory Disabilities: A Guide to Web Accessibility</h1>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
      In the digital age, the internet serves as a gateway to information and services for millions 
      worldwide. To ensure an inclusive online experience, it's crucial to address the needs of 
      individuals with auditory disabilities. Understanding the challenges faced by this user group 
      and implementing accessible design principles is key to creating a more inclusive web environment.
      </p>
      
      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-2-2">What Are Auditory Disabilities?</h1>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
      Auditory disabilities encompass a range of conditions, from partial hearing 
      loss to total deafness. Individuals with auditory disabilities face unique 
      challenges when interacting with online content, making it essential for web 
      developers and designers to take proactive measures to enhance accessibility.
      </p>


      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-2-3">Challenges Faced by Individuals with Auditory Disabilities</h1>
      <h2 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle}>1.Hearing Loss</h2>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Users with varying degrees of hearing loss may struggle to perceive audio content.
      Important information should be conveyed through visual and text alternatives.</p>
      <h2 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle}>2.Deafness</h2>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Deaf individuals rely on visual cues and text-based content to access information.
      Transcripts and captions for multimedia content are crucial for conveying spoken words.</p>
      <h2 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle}>3.Cognitive and Learning Disabilities</h2>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Some individuals may have cognitive or learning disabilities that impact their ability to process auditory information.
      Providing alternative formats and presenting information in a clear and concise manner benefits users with cognitive challenges.
      </p>


      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-2-4">Web Accessibility Guidelines</h1>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
      To enhance web accessibility for individuals with auditory disabilities, 
      adherence to established guidelines is imperative. The Web Content Accessibility 
      Guidelines (WCAG) provides principles and criteria that address the specific needs 
      of users with auditory impairments.
      </p>

      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>1. Captions and Transcripts:</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Include captions for all audio and video content to provide a 
      text-based representation of spoken words.
      Provide transcripts for multimedia content to ensure access for individuals who 
      prefer or require text-only content.</p>

      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>2. Audio Control and Volume:</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Allow users to control audio volume independently.
      Avoid auto-playing audio, as it can be disruptive and disorienting for users with auditory sensitivities.</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>3. Accessible Alerts and Notifications:</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Ensure that alerts and notifications are presented visually or through alternative
       means for users who may not hear audio cues.</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>4. Clear Navigation and Instructions:</p>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>Provide clear and concise navigation instructions and avoid relying solely on auditory cues.</p>
      

      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-2-5">The Impact of Web Accessibility</h1>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
      Ensuring web accessibility for individuals with visual impairments is not only a legal 
      and ethical responsibility but also makes good business sense. An accessible website 
      opens up your content to a broader audience, potentially increasing user engagement 
      and satisfaction. It also contributes to a positive brand image, emphasizing inclusivity 
      and a commitment to diversity.
      </p>

      <h1 className={`title-style ${textScaling > 1 ? 'scaled' : ''}`} style={titleStyle} id="subheading-2-6">Conclusion</h1>
      <p className={`text-style ${textScaling > 1 ? 'scaled' : ''}`}style={textStyle}>
      In the ever-evolving digital landscape, web accessibility is not an afterthought 
      but a fundamental aspect of website development. By understanding the challenges 
      faced by individuals with visual impairments and implementing accessible design 
      principles, you contribute to a more inclusive online experience. As you embark on 
      creating or updating your website, remember that accessibility benefits everyone, 
      making the internet a space where everyone can participate, regardless of their abilities 
      or disabilities.
      </p>
    </div>
  );
};

export default Auditory;