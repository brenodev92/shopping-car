import api from "../../../../services/api";
import { login } from "./auth.action";
import { addCar, addCars } from "./car.action";
import { addMessages } from "./ux.action";

export const getAllCars = () => {
  return (dispatch) => {
    api
      .get("/cars")
      .then((res) => {
        dispatch(addCars(res.data));
      })
      .catch(console.log);
  };
};

export const fetchAddCar = (car) => {
  return (dispatch) => {
    api
      .post("/cars", car)
      .then((res) => {
        dispatch(addCar(res.data));
      })
      .catch(console.log);
  };
};

export const authLogin = (user) => {
  return (dispatch) => {
    api
      .post("/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(login());
        window.location.pathname = "/adicionar-item";
      })
      .catch((error) => {
        const { message } = error.response.data;
        dispatch(addMessages(message));
      });
  };
};
