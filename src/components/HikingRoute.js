import React from 'react';

const HikingRoute = ({ name, description, difficulty, location, imageUrl }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Difficulté: {difficulty}</p>
      <p>Emplacement: {location}</p>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default HikingRoute;
