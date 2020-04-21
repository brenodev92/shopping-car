import { logout } from "../store/ducks/actions/appActions/auth.action";

export default function Logout() {
  localStorage.removeItem("token");
  return logout();
}
