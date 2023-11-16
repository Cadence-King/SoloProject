// src/components/Page1.js
import React from 'react';


const Page1 = ({ textScaling, darkMode }) => {
  const textStyle = {
    fontSize: `${16 * textScaling}px`, // Adjust text size based on textScaling
    color: darkMode ? '#fff' : '#333', // Adjust text color based on darkMode
  };
  const TitleStyle = {
    fontSize: `${22 * textScaling}px`, // Adjust text size based on textScaling
    color: darkMode ? '#fff' : '#333', // Adjust text color based on darkMode
  };
  const pageContainerStyle = {
    backgroundColor: darkMode ? '#000' : '#ebbebe', // Adjust background color based on darkMode
  };

  return (
    <div className="page-container" style={pageContainerStyle}>

      <h1 style={TitleStyle}>Understanding Visual Impairments: A Guide to Web Accessibility</h1>
      <p style={textStyle}>
      In the vast and diverse landscape of the internet, ensuring that 
      your website is accessible to everyone is not just good practice; 
      it's a fundamental aspect of inclusivity. One significant aspect 
      of web accessibility is addressing the needs of individuals with 
      visual impairments. Visual impairments can range from mild to severe, 
      and web developers and designers play a crucial role in creating 
      an online environment that accommodates this diversity.
      </p>

      <h2 style={TitleStyle}>What is a Visual Impairment?</h2>
      <p style={textStyle}>
      A visual impairment refers to a limitation in a person's ability to see,
       which can be caused by various eye conditions or diseases. 
       The spectrum of visual impairments includes blindness, low vision, 
       and color blindness. Each of these conditions presents unique challenges
        that web developers must consider when creating and designing websites.
      </p>
      


      <h2 style={TitleStyle}>Challenges Faced by Individuals with Visual Impairments</h2>

      <h2 style={TitleStyle}>1. Blindness</h2>
      <p style={textStyle}>
      Blind individuals rely on screen readers, which convert text into synthesized 
      speech, to navigate websites.
      Non-text content, such as images, must have alternative text to provide 
      meaningful descriptions.
      </p>

      <h2 style={TitleStyle}>2. Low Vision</h2>
      <p style={textStyle}>
      People with low vision may use screen magnifiers to enlarge text and images.
      Websites should be designed with resizable text and provide sufficient contrast 
      between text and background.
      </p>

      <h2 style={TitleStyle}>3. Color Blindness</h2>
      <p style={textStyle}>
      Color blindness affects the ability to perceive certain colors accurately.
      Important information should not be conveyed solely through color, 
      and text should be easily readable against various background colors.
      </p>


      <h2 style={TitleStyle}>Web Accessibility Guidelines</h2>
      <p style={textStyle}>
      To make the web inclusive for users with visual impairments, it's essential 
      to adhere to established accessibility guidelines, such as the Web Content 
      Accessibility Guidelines (WCAG). These guidelines provide a framework for 
      creating accessible websites and include principles that specifically address visual impairments.
      </p>

      <p style={textStyle}>
      1. Text Alternatives (Alt Text):
      Include descriptive alt text for images to convey their content or function to users who cannot see them.
      2. Text and Contrast:
      Ensure that text is resizable without loss of content or functionality.
      Maintain sufficient contrast between text and background to enhance readability.
      3. Keyboard Navigation:
      Design websites to be navigable using a keyboard alone, as some users with visual impairments rely on keyboard navigation.
      4. Accessible Forms:
      Create forms that are compatible with screen readers and provide clear instructions and error messages.
      </p>

      <h2 style={TitleStyle}>The Impact of Web Accessibility</h2>
      <p style={textStyle}>
      Ensuring web accessibility for individuals with visual impairments is not only a legal 
      and ethical responsibility but also makes good business sense. An accessible website 
      opens up your content to a broader audience, potentially increasing user engagement 
      and satisfaction. It also contributes to a positive brand image, emphasizing inclusivity 
      and a commitment to diversity.
      </p>

      <h2 style={TitleStyle}>Conclusion</h2>
      <p style={textStyle}>
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

export default Page1;