import React from 'react';
import { Car } from '../../components';
import { cars } from '../../data/cars.data';
const ListItem = () => {
  return (
    <div className="container-fluid">
    <div className="row">{cars.map((car, index) => <Car key={index} car={car} />)}</div>
  </div>
  )
};

export default ListItem;
