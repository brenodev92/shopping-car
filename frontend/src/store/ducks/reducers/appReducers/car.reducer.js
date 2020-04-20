import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/appActions";

const initialState = [];

export default createReducer(initialState, {
  [Actions.addCar.type]: (state, action) => [...state, action.payload],
  [Actions.addCars.type]: (state, action) => [...action.payload],
});
