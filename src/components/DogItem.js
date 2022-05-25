import React from "react";
import { Link } from "react-router-dom";

function DogItem({ id, name }) {

  return (
    <div className="dog-item">
      <h3>{name}</h3>
      <Link to={`/dogs/${id}`}>See more</Link>
    </div>
  );
}

export default DogItem;
