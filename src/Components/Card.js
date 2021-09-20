import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={props.src} alt={props.description} />
      </div>
    </div>
  );
};

export default Card;
