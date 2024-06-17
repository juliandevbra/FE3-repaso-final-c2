import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
  const [beer, setBeer] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const getBeer = async () => {
    //Deberas completar este fetch con el parametro correspondiente
    const res = await fetch(`https://api.sampleapis.com/beers/ale/${id}`);
    const data = await res.json();
    console.log(data);
    setBeer(data);
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      <h2>Cerveza numero {id}</h2>
      <div className="card">
        <img src={beer.image} alt="beer-detail" />
        <p>{beer.price}</p>
        <p>Rating: {beer.rating?.average}</p>
        <p>Reviews: {beer.rating?.reviews} </p>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Beer;
