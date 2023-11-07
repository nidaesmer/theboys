import React from "react";

const Card = ({ name, gender, image, citizenship }) => {
  return (
    <div className="card">
      <img src={image} />
      <h1>{name}</h1>
      <div>{gender}</div>
      <div>{citizenship}</div>
    </div>
  );
};

export default Card;
