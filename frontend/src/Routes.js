import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/pages/Home.jsx";
import AllProducts from "./products/pages/AllProducts.jsx";
import Account from "./user/pages/Account.jsx";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={AllProducts} />
        <Route path="/account" exact component={Account} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
