import React from "react";
import { useBeerContext } from "../Context/Context";
import Card from "../components/Card";
import { toast } from "react-toastify";

const Cart = () => {
  const { state, dispatch } = useBeerContext();
  const deleteCart = (beer) => {
    dispatch({ type: "DELETE_CART", payload: beer });
    toast.error("Se quitó del carrito");
  };
  return (
    <div className="grid">
      {state.cart.map((beer) => (
        <Card data={beer} key={beer.id}>
          <button onClick={() => deleteCart(beer)}>❌</button>
        </Card>
      ))}
    </div>
  );
};

export default Cart;
