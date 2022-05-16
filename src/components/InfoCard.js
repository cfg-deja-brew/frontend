import React from "react";
import './InfoCard.css';

const InfoCard = ({name, address, city, postcode}) => {
  return (
    <div className="card info-card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{address}<br />{city}<br />{postcode}</p>
      </div>
    </div>
  );
};

export default InfoCard;