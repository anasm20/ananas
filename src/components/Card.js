// Card.js
import React from 'react';

const Card = ({ title, buttonText, link, image }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <p>{title}</p>
          <a href={link} className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
