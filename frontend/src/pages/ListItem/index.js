import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Car } from "../../components";
import * as Actions from "../../store/ducks/actions/appActions";

const ListItem = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(Actions.getAllCars());
  }, [dispatch]);

  function addItemCart(car) {
    dispatch(Actions.addItem(car));
    dispatch(Actions.addMessages(`Item ${car.name} adicionado!`));
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {cars.map((car, index) => (
          <Car key={index} car={car} addItemCart={addItemCart} />
        ))}
      </div>
    </div>
  );
};

export default ListItem;
