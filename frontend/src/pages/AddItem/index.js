import React from 'react';

// import { Container } from './styles';

const AddItem = () => {
  return (
    <form className="container mt-5">
			<div className="form-group">
				<label>Nome</label>
				<input type="text" name="name" className="form-control" placeholder="Nome..." />
			</div>
      <div className="form-group">
				<label>Preço</label>
				<input type="text" name="price" className="form-control" placeholder="Preço..." />
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input type="text" name="url" className="form-control" placeholder="URL:https://cars" />
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
  )
};

export default AddItem;
