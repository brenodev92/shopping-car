import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./ducks/reducers/appReducers/car.reducer";
import uxReducer from "./ducks/reducers/appReducers/ux.reducer";

export default configureStore({
  reducer: {
    cars: carReducer,
    ux: uxReducer,
  },
});
