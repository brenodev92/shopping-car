import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/appActions";

const initialState = {
  isAuthenticated: false,
};

export default createReducer(initialState, {
  [Actions.login.type]: (state, action) => ({
    ...state,
    isAuthenticated: true,
  }),

  [Actions.logout.type]: (state, action) => ({
    ...state,
    isAuthenticated: false,
  }),
});
