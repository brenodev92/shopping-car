import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./reducers/appReducers/car.reducer";
import uxReducer from "./reducers/appReducers/ux.reducer";

export default configureStore({
  reducer: {
    cars: carReducer,
    ux: uxReducer,
  },
});
