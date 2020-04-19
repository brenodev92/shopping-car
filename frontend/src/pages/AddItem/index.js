import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actions/appActions";

const AddItem = () => {
  const [form, setForm] = useState({ name: "", price: "", url: "" });
  const dispatch = useDispatch();

  function formChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(Actions.addCar(form));
    setForm({ name: "", price: "", url: "" });
    dispatch(Actions.showAlert());
    setTimeout(() => {
      dispatch(Actions.hideAlert());
    }, 1500);
  }

  return (
    <form onSubmit={onSubmit} className="container mt-5">
      <div className="form-group">
        <label>Nome</label>
        <input
          onChange={formChange}
          type="text"
          value={form.name}
          name="name"
          className="form-control"
          placeholder="Nome..."
        />
      </div>
      <div className="form-group">
        <label>Preço</label>
        <input
          onChange={formChange}
          type="text"
          value={form.price}
          name="price"
          className="form-control"
          placeholder="Preço..."
        />
      </div>
      <div className="form-group">
        <label>URL:</label>
        <input
          onChange={formChange}
          type="text"
          value={form.url}
          name="url"
          className="form-control"
          placeholder="URL:https://cars"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
};

export default AddItem;
