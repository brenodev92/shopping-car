import { createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/appActions";

const initialState = {
  messages: [],
};

export default createReducer(initialState, {
  [Actions.addMessages.type]: (state, action) => ({
    ...state,
    messages: [...state.messages, action.payload],
  }),

  [Actions.removeMessages.type]: (state, action) => ({
    ...state,
    messages: state.messages.filter((msg) => msg !== action.payload),
  }),
});
