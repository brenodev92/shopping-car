import { createStore } from "redux";
import { cars } from "../data/cars.data";

const initialState = cars;

function reducer(state = initialState, action) {
  return state;
}

export default createStore(reducer);
