import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data, children }) => {
  return (
    <div className="card">
      <Link to={"/beer/" + data.id}>
        <h3>{data.name}</h3>
      </Link>

      <p>{data.price}</p>
      <img src={data.image} alt="beer-detail" />
      {children}
    </div>
  );
};

export default Card;
