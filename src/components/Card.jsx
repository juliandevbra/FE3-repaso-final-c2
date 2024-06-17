import React from "react";
import { Link } from "react-router-dom";
import { useBeerContext } from "../Context/Context";

const Card = ({ data }) => {
  const { setCart } = useBeerContext();

  return (
    <div className="card">
      <Link to={"/beer/" + data.id}>
        <h3>{data.name}</h3>
      </Link>

      <p>{data.price}</p>
      <img src={data.image} alt="beer-detail" />
      <button onClick={() => setCart((prev) => [...prev, data])}>🛒</button>
    </div>
  );
};

export default Card;
