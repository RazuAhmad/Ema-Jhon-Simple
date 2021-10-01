import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Component/Header/Header";
import Inventory from "./Component/Inventory/Inventory";
import NotFound from "./Component/NotFound/NotFound";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import Review from "./Component/Review/Review";
import Shop from "./Component/Shop/Shop";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
