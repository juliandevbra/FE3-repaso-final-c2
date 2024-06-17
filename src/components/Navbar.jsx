import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contacto">
        <h4>Contact</h4>
      </Link>
      <Link to="/cart">
        <h4>Cart</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
