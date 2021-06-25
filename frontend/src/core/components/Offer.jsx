import React from "react";
import { Link } from "react-router-dom";

import watchImage from "../../images/exclusive.png";
import classes from "../css/Offer.module.css";

const Offer = () => {
  return (
    <div className={classes.offer}>
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img
              src={watchImage}
              alt="Exclusive Watch"
              className={classes["offer-image"]}
            />
          </div>
          <div className="col-2">
            <h5>Exclusively Available on RedStore</h5>
            <h2>Smart Band 4</h2>
            <small>
              The MI smart Band 4 features a 39.9% larger (than MI Band 3)
              AMOLED color full-touch dissmalllay with adjustable brightness, so
              everything is clear as can be.{" "}
            </small>{" "}
            <br />
            <br />
            <Link to="/" className="btn">
              Buy Now &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
