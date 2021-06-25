import React from "react";

import classes from "../css/Footer.module.css";

import androidIcon from "../../images/play-store.png";
import iosIcon from "../../images/app-store.png";
import whiteLogoIcon from "../../images/logo-white.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className="row">
          <div className={classes["footer-col-1"]}>
            <h3>Download Our App</h3>
            <p>Downlaod App for Android and iOS Mobile Phone.</p>
            <div className={classes["app-logo"]}>
              <img src={androidIcon} alt="" />
              <img src={iosIcon} alt="" />
            </div>
          </div>
          <div className={classes["footer-col-2"]}>
            <img src={whiteLogoIcon} alt="White" />
            <p>
              Our Purpose is to Sustainably make the pleasure and benifits of
              Sports accessible to the many.
            </p>
          </div>
          <div className={classes["footer-col-3"]}>
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className={classes["footer-col-4"]}>
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className={classes.copyright}>Copyright 2021 - Utkarsh Kore</p>
      </div>
    </div>
  );
};

export default Footer;
