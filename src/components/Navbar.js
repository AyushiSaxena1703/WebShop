import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Global/CartContext";
const Navbar = () => {
  const { qty } = useContext(CartContext);
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">Alfanzo Styles</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="cart">
            <span className="shoppingCart">
              <i class="fas fa-cart-arrow-down"></i>
              <span className="cartCount">{qty}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
