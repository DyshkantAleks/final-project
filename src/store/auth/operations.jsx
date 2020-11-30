import { server } from "../../API";
import { logOutCustomer } from "../customer/actions";

import { delLogin, delToken, setAuthError, setToken } from "./actions";

export const setAuthToken = (token) => {
  server.defaults.headers.common.Authorization = token;
};

export const logOut = () => (dispatch) => {
  server.defaults.headers.common.Authorization = "";
  dispatch(logOutCustomer());
  dispatch(delLogin());
  dispatch(delToken());
};
export const auth = async (login, password) => {
  try {
    const response = await server.post("/customers/login", {
      loginOrEmail: login,
      password,
    });
    return response;
  } catch (error) {
    throw new Error(Object.values(error.response.data));
  }
};
