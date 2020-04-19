import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AddItem, Cart, ListItem } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/lista-item" component={ListItem} />
      <Route path="/adicionar-item" component={AddItem} />
      <Route path="/carrinho" component={Cart} />
      <Redirect path="/" to="/lista-item" />
    </Switch>
  );
};

export default Routes;
