import React from "react";

import ProductItem from "./ProductItem";

import { featuredProducts } from "../../data/data";
import productOne from "../../images/product-1.jpg";
import productTwo from "../../images/product-2.jpg";
import productThree from "../../images/product-3.jpg";
import productFour from "../../images/product-4.jpg";

const FeaturedProducts = () => {
  const productsImages = [productOne, productTwo, productThree, productFour];

  return (
    <div className="small-container">
      <h2 className="title">Featured Products</h2>
      <div className="row">
        {featuredProducts.map((product, index) => (
          <ProductItem
            image={productsImages[index]}
            title={product.title}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
