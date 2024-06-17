import React from "react";
import { useBeerContext } from "../Context/Context";
import Card from "../components/Card";

const Cart = () => {
  const { cart } = useBeerContext();
  return (
    <div className="grid">
      {cart.map((beer) => (
        <Card data={beer} key={beer.id} />
      ))}
    </div>
  );
};

export default Cart;
