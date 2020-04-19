import { HIDE_ALERT, SHOW_ALERT } from "../actions/appActions";
import reducer from "./appReducers/ux.reducer";

describe("UX Reducer", () => {
  test("Deve retornar o state inicial", () => {
    expect(reducer(undefined, {})).toEqual({ isShowAlert: false });
  });

  test("Deve retornar o state com a prop igual a true", () => {
    expect(reducer(undefined, { type: SHOW_ALERT })).toEqual({
      isShowAlert: true,
    });
  });

  test("Deve retornar o state da prop false quando o mesmo ja estiver setado como true", () => {
    expect(reducer({ isShowAlert: true }, { type: HIDE_ALERT })).toEqual({
      isShowAlert: false,
    });
  });
});
