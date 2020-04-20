import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/appActions";

const initialState = [];

export default createReducer(initialState, {
  [Actions.addItem.type]: (state, action) => [...state, action.payload],
  [Actions.removeItem.type]: (state, action) =>
    state.filter((item) => item._id !== action.payload),
});
