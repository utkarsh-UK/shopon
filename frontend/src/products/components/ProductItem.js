import React from "react";
import { Link } from "react-router-dom";

import classes from "../css/ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={classes["col-4"]}>
      <Link to="/" className="link">
        <img src={props.image} alt={props.title} />
      </Link>
      <Link to="/" className="link">
        <h4> {props.title} </h4>
      </Link>
      <div className={classes.rating}>
        {[1, 2, 3, 4, 5].map((rate) =>
          rate <= props.rating ? (
            <i class="fa fa-star"></i>
          ) : (
            <i class="fa fa-star-o"></i>
          )
        )}
      </div>
      <p> ₹{props.price.toFixed(2)} </p>
    </div>
  );
};

export default ProductItem;
