import * as Actions from "../../actions/appActions";

const initialState = {
  isShowAlert: false,
};

export default function uxReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SHOW_ALERT:
      return { ...state, isShowAlert: true };
    case Actions.HIDE_ALERT: {
      return { ...state, isShowAlert: false };
    }
    default:
      return state;
  }
}
