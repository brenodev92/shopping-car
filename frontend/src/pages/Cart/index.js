import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCart from "../../components/ItemCart";
import * as Actions from "../../store/ducks/actions/appActions";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeItemCart(car) {
    dispatch(Actions.removeItem(car._id));

    dispatch(Actions.addMessages(`Item ${car.name} removido!`));
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {cart.length === 0 ? (
          <p className="col-sm-12 mt-5 text-warning text-center">
            Sem produtos no Carrinho...
          </p>
        ) : (
          <React.Fragment>
            {cart.map((item) => (
              <ItemCart
                key={item._id}
                item={item}
                removeItemCart={removeItemCart}
              />
            ))}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
