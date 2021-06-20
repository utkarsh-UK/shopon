import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import FeaturedProducts from "../../products/components/FeaturedProducts";
import LatestProducts from "../../products/components/LatestProducts";
import Offer from "../components/Offer";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

import featureImage from "../../images/feature-image.png";
import categoryOneImage from "../../images/category-1.jpg";
import categoryTwoImage from "../../images/category-2.jpg";
import categoryThreeImage from "../../images/category-3.jpg";

import classes from "../css/Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className="container">
          <NavBar />
          <FeatureElement />
        </div>
      </div>
      <div className={classes.categories}>
        <div className={classes["small-container"]}>
          <div className="row">
            <div className="col-3">
              <img src={categoryOneImage} alt="Category One" />
            </div>
            <div className="col-3">
              <img src={categoryTwoImage} alt="Category Two" />
            </div>
            <div className="col-3">
              <img src={categoryThreeImage} alt="Category Three" />
            </div>
          </div>
        </div>
      </div>
      <FeaturedProducts />
      <LatestProducts />
      <Offer />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};

export default Home;

// Featured Element
const FeatureElement = () => {
  return (
    <div className="row">
      <div className={classes["col-1"]}>
        <h2>
          Give Your Workout <br /> A New Style
        </h2>
        <p>
          Success isn't always about greatness. It's about consistency.
          Consistent <br /> hard work gains success. Greatness will come.
        </p>
        <Link to="/" className="btn">
          Explore Now &#8594;
        </Link>
      </div>
      <div className="col-2">
        <img src={featureImage} alt="Feature" />
      </div>
    </div>
  );
};
