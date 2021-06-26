import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../core/components/Footer";
import NavBar from "../../core/components/NavBar";
import featureImage from "../../images/feature-image.png";
import classes from "../css/Account.module.css";

const Account = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);

  let indicatorClass = `${classes["translate-100"]}`;
  let loginClass = `${classes["translate-0"]}`;
  let registerClass = `${classes["translate-0"]}`;

  if (isLoginActive) {
    indicatorClass = `${classes["translate-0"]}`;
    loginClass = `${classes["translate-300"]}`;
    registerClass = `${classes["translate-300"]}`;
  }

  const toggleFormState = () => {
    setIsLoginActive((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div className="container">
        <NavBar />
      </div>
      <div className={classes["account-page"]}>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={featureImage} alt="" />
            </div>

            <div className="col-2">
              <div className={classes["form-container"]}>
                <div className={classes["form-btn"]}>
                  <span onClick={toggleFormState}>Login</span>
                  <span onClick={toggleFormState}>Register</span>
                  <hr id={classes.indicator} className={indicatorClass} />
                </div>

                {/* form */}
                <form
                  action="/"
                  id={classes["login-form"]}
                  className={loginClass}
                >
                  <input
                    type="text"
                    name="username"
                    id=""
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    name="username"
                    id=""
                    placeholder="Password"
                  />
                  <button type="submit" className="btn">
                    Login
                  </button>
                  <Link to="/" className="link">
                    Forgot Password
                  </Link>
                </form>

                {/* Register form */}
                <form
                  action="/"
                  id={classes["reg-form"]}
                  className={registerClass}
                >
                  <input
                    type="text"
                    name="username"
                    id=""
                    placeholder="Username"
                  />
                  <input type="email" name="email" id="" placeholder="Email" />
                  <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                  />
                  <button type="submit" className="btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Account;
