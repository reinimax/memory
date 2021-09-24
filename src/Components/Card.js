import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div data-id={props.id} className="card" onClick={props.onClick}>
      <div className="image-wrapper">
        <img src={props.src} alt={props.description} />
      </div>
    </div>
  );
};

export default Card;
