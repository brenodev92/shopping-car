import { combineReducers } from "redux";
import carReducer from "./car.reducer";

const rootReducer = combineReducers({
  cars: carReducer,
});

export default rootReducer;
