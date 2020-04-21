import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/ducks/actions/appActions";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    dispatch(Actions.authLogin(form));

    setForm({
      username: "",
      password: "",
    });
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      action=""
      style={{
        margin: "40px auto",
        width: 350,
      }}
    >
      <h2 className="mb-3">Shopping Car Login</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Usuário..."
          className="form-control"
          name="username"
          value={form.username}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Senha..."
          className="form-control"
          name="password"
          value={form.password}
          onChange={handleFormChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">
          Entrar
        </button>
      </div>
    </form>
  );
};

export default Login;
