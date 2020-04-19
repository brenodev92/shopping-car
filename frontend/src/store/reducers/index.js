import { combineReducers } from "redux";
import carReducer from "./appReducers/car.reducer";
import uxReducer from "./appReducers/ux.reducer";

const reducer = combineReducers({
  cars: carReducer,
  ux: uxReducer,
});

export default reducer;
