import React from "react";
import { useBeerContext } from "../Context/Context";
import Card from "../components/Card";

const Cart = () => {
  const { state, dispatch } = useBeerContext();
  return (
    <div className="grid">
      {state.cart.map((beer) => (
        <Card data={beer} key={beer.id}>
          <button
            onClick={() => dispatch({ type: "DELETE_CART", payload: beer })}
          >
            ❌
          </button>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
