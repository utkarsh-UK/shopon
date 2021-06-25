import React, { Fragment } from "react";
import Footer from "../../core/components/Footer";

import NavBar from "../../core/components/NavBar";
import LatestProducts from "../components/LatestProducts";

import classes from "../css/AllProducts.module.css";

const AllProducts = () => {
  return (
    <Fragment>
      <div className="container">
        <NavBar />
      </div>
      <div className="small-container">
        <div className={"row " + classes["row-2"]}>
          <h2>All Products</h2>
          <select name="sort" id="sort">
            <option value="default">Default Sorting</option>
            <option value="price">Sort By Price</option>
            <option value="popularity">Sort by Popularity</option>
            <option value="rating">Sort by Rating</option>
            <option value="sale">Sort by Sale</option>
          </select>
        </div>
      </div>
      <LatestProducts shouldShowTitle={false} />
      <LatestProducts shouldShowTitle={false} />
      <Footer />
    </Fragment>
  );
};

export default AllProducts;
