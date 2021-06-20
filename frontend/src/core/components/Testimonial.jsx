import React from "react";

import classes from "../css/Testimonial.module.css";

import userOne from "../../images/user-1.png";

const Testimonial = () => {
  const cardClass = "col-3 " + classes.card;

  return (
    <div className={classes.testimonial}>
      <div className="small-container">
        <div className="row">
          <div className={cardClass}>
            <i class="fa fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
            <div class={classes.rating}>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <img src={userOne} alt="User 1" className={classes.user} />
            <h3>Sean Parker</h3>
          </div>
          <div className={cardClass}>
            <i class="fa fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
            <div class={classes.rating}>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <img src={userOne} alt="User 1" className={classes.user} />
            <h3>Sean Parker</h3>
          </div>
          <div className={cardClass}>
            <i class="fa fa-quote-left"></i>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
            <div class={classes.rating}>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </div>
            <img src={userOne} alt="User 1" className={classes.user} />
            <h3>Sean Parker</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
