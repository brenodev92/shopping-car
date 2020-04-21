import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { AddItem, Cart, ListItem, Login } from "./pages";

function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

const Routes = () => {
  return (
    <Switch>
      <Route path="/lista-item" component={ListItem} />
      <PrivateRoute path="/adicionar-item" component={AddItem} />
      <Route path="/carrinho" component={Cart} />
      <Route path="/login" component={Login} />
      <Redirect path="/" to="/lista-item" />
    </Switch>
  );
};

export default Routes;
