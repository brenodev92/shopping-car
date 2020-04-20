import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./ducks/reducers/appReducers/auth.reducer";
import carReducer from "./ducks/reducers/appReducers/car.reducer";
import cartReducer from "./ducks/reducers/appReducers/cart.reducer";
import uxReducer from "./ducks/reducers/appReducers/ux.reducer";

export default configureStore({
  reducer: {
    cars: carReducer,
    ux: uxReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
