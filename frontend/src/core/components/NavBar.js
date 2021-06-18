import React from "react";
import { Link } from "react-router-dom";

import logoImage from "../../images/logo.png";
import cartImage from "../../images/cart.png";

import classes from "../css/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <Link to="/">
        <img src={logoImage} alt="Logo" className={classes.logo} />
      </Link>

      <nav className={classes["menu-items"]}>
        <ul>
          <Link to="/" className={classes.link}>
            {" "}
            <li>Home</li>{" "}
          </Link>
          <Link to="/" className={classes.link}>
            {" "}
            <li>Products</li>{" "}
          </Link>
          <Link to="/" className={classes.link}>
            {" "}
            <li>About</li>{" "}
          </Link>
          <Link to="/" className={classes.link}>
            {" "}
            <li>Contact</li>{" "}
          </Link>
          <Link to="/" className={classes.link}>
            {" "}
            <li>Account</li>{" "}
          </Link>
        </ul>
      </nav>

      <Link to="/" className={classes.link}>
        <img src={cartImage} alt="Cart Icon" className={classes.cart} />
      </Link>
    </div>
  );
};

export default NavBar;
