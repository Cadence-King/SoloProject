import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const TableOfContents = ({ headings }) => {
  const storedVisibility = localStorage.getItem('tableOfContentsVisible');
  const [isVisible, setIsVisible] = useState(
    storedVisibility === null ? true : JSON.parse(storedVisibility)
  );

  const toggleVisibility = () => {
    const newValue = !isVisible;
    setIsVisible(newValue);
    localStorage.setItem('tableOfContentsVisible', JSON.stringify(newValue));
  };

  if (!headings || headings.length === 0) {
    return null; // Do not render the TableOfContents if there are no headings
  }

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const offset = 50;
      const offsetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`table-of-contents ${isVisible ? 'visible' : 'hidden'}`}>
      <button onClick={toggleVisibility} className="toggle-button">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h2 className="toc-title">Table of Contents</h2>
      <div className="contents">
        <ul className={`toc-content ${isVisible ? 'visible' : 'hidden'}`}>
          {headings.map((heading) => (
            <li key={heading.id}>
            <a href={`#${heading.id}`} onClick={(e) => handleLinkClick(e, heading.id)}>
              {heading.text}
            </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;