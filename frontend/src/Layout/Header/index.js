import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  const length = useSelector((state) => state.cart.length);

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
            <NavLink
              to="/adicionar-item"
              activeClassName="active"
              className="nav-link"
            >
              Adicionar
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ml-md-auto">
        <NavLink to="/carrinho" activeClassName="active" className="nav-item">
          <i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
            <span className="fa-counter">{length}</span>
          </i>
        </NavLink>
      </ul>
    </nav>
  );
}
