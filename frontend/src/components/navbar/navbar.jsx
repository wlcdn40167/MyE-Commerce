import React from "react";
import "./navbar.css";
import logo from "../assets/shopping-bag.jpg";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} />
        <p>Stock-Z</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("nike");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/nike">
            Nike
          </Link>
          {menu === "nike" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("adidas");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/adidas">
            Adidas
          </Link>
          {menu === "adidas" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("newbalance");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/newbalance">
            New Balance
          </Link>
          {menu === "newbalance" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
export default Navbar;
