export const SHOW_ALERT = "SHOW_ALERT [ALERT] ABRIR MENSAGEM";
export const HIDE_ALERT = "HIDE_ALERT [ALERT] FECHAR MENSAGEM";

export function showAlert() {
  return {
    type: SHOW_ALERT,
  };
}
export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
