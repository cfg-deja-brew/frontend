import React from "react";
import './InfoCard.css';
import LikeCafe from './LikeButton';

const InfoCard = ({highlighted, name, description, opening, onClick=undefined}) => {
  return (
    <div className={`card ${highlighted || 'info-card'}`} onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{opening}</p>
        <small className="card-text">{description}</small>
        <LikeCafe />
      </div>
    </div>
  );
};

export default InfoCard;
