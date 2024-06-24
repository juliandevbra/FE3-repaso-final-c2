import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBeerContext } from "../Context/Context";
import Swal from "sweetalert2";
import useFetch from "../utils/useFetch";
//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
  // const [beer, setBeer] = useState([]);

  const { state, dispatch } = useBeerContext();
  const { beer } = state;

  const { id } = useParams();
  const navigate = useNavigate();
  const url = `https://api.sampleapis.com/beers/ale/${id}`;
  // const url = `https://api.punkapi.com/v2/beers/${id})`;
  console.log(id);

  const data = useFetch(url);
  console.log(data);

  // const getBeer = async () => {
  //   try {
  //     // const res = await fetch(url);
  //     // const data = await res.json();

  //     dispatch({ type: "GET_BEER", payload: data });
  //   } catch (err) {
  // Swal.fire({
  //   icon: "error",
  //   title: "Oops...",
  //   text: "Error al traer el detalle de la cerveza!",
  //   footer: err,
  // });
  //   }
  // };

  // useEffect(() => {
  //   getBeer();
  // }, []);

  return (
    <div>
      <h2>Cerveza numero {id}</h2>
      <div className="card">
        {data && (
          <>
            <img src={data.image} alt="beer-detail" />
            <p>{data.price}</p>
            <p>Rating: {data.rating?.average}</p>
            <p>Reviews: {data.rating?.reviews} </p>
          </>
        )}
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Beer;
