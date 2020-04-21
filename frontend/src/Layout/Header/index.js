import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logoutService from "../../services/logout.service";
import "./style.css";

export default function Header() {
  const length = useSelector((state) => state.cart.length);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function authLogoutButton() {
    isAuthenticated && dispatch(logoutService());
  }

  return (
    <nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink
        to="/lista-item"
        activeClassName="active"
        className="navbar-brand"
      >
        Shopping-Car
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              to="/lista-item"
              activeClassName="active"
              className="nav-link"
            >
              Listar
            </NavLink>
          </li>
          <li className="nav-item">
            {isAuthenticated && (
              <NavLink
                to="/adicionar-item"
                activeClassName="active"
                className="nav-link"
              >
                Adicionar
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ml-md-auto">
        {isAuthenticated ? (
          <NavLink
            onClick={authLogoutButton}
            to="/login"
            activeClassName="active"
            className="nav-item mt-2 mr-3"
          >
            <i className="fa fa-sign-out fa-2x" aria-hidden="true"></i>
          </NavLink>
        ) : (
          <NavLink
            onClick={authLogoutButton}
            to="/login"
            activeClassName="active"
            className="nav-item mt-2 mr-3"
          >
            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
          </NavLink>
        )}
        <NavLink to="/carrinho" activeClassName="active" className="nav-item">
          <i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
            <span className="fa-counter">{length}</span>
          </i>
        </NavLink>
      </ul>
    </nav>
  );
}
