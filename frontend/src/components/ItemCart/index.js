import React from "react";

const ItemCart = ({ item, removeItemCart }) => {
  return (
    <div className="col-sm-3 mt-3">
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">{item.name}</div>
        <div className="card-body" style={{ padding: 0 }}>
          <img src={item.url} alt={item.name} style={{ width: "100%" }} />
          <div className="d-flex justify-content-between align-items-center mx-3 my-3">
            <h5 className="card-title mb-0">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.price)}
            </h5>
            <button
              className="btn btn-primary"
              onClick={() => removeItemCart(item)}
            >
              <i className="fa fa-trash fa-2x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
