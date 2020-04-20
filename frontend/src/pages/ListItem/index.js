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

  return (
    <div className="container-fluid">
      <div className="row">
        {cars.map((car, index) => (
          <Car key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default ListItem;
