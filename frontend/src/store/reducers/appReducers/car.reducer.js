import { cars } from "../../../data/cars.data";
import * as Actions from "../../actions/appActions";

const initialState = cars;

export default function carReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_CAR:
      return [...state, action.car];
    default:
      return state;
  }
}
