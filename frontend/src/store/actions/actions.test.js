import * as Actions from "./appActions";

describe("UX Actions", () => {
  describe("Actions Types", () => {
    test("Deve retornar a action tipe SHOW_ALERT", () => {
      expect(Actions.SHOW_ALERT).toEqual("SHOW_ALERT [ALERT] ABRIR MENSAGEM");
    });
  });

  describe("Actions Types", () => {
    test("Deve retornar a action tipe HIDE_ALERT", () => {
      expect(Actions.HIDE_ALERT).toEqual("HIDE_ALERT [ALERT] FECHAR MENSAGEM");
    });
  });

  describe("Actions creators", () => {
    test("Deve retornar o creator {type: SHOW_ALERT}", () => {
      expect(Actions.showAlert()).toEqual({ type: Actions.SHOW_ALERT });
    });
  });

  describe("Actions creators", () => {
    test("Deve retornar o creator {type: HIDE_ALERT}", () => {
      expect(Actions.hideAlert()).toEqual({ type: Actions.HIDE_ALERT });
    });
  });
});
