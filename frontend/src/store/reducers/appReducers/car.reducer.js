import { createReducer } from "@reduxjs/toolkit";
import { cars } from "../../../data/cars.data";
import * as Actions from "../../actions/appActions";

const initialState = cars;

export default createReducer(initialState, {
  [Actions.addCar.type]: (state, action) => [...state, action.payload],
});
