import React from "react";
import "./card.scss";

// eslint-disable-next-line react/prop-types
const Card = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="sub-title">SHOP NOW </p>
      </div>
    </div>
  );
};

export default Card;
