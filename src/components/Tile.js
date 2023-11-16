// Tile.js
import React from 'react';

const Tile = ({ title, imageSrc, description, link }) => {
  return (
    <a className="tile" href={link}>
      <div className="tile-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
        <p className="tile-description">{description}</p>
      </div>
    </a>
  );
};

export default Tile;
