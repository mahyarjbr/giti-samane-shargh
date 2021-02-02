import Axios from "axios";
import { postAction } from "./postAction";
export const loginAction = (username, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQ_SEND", payload: { username, password } });

  try {
    const {
      data,
    } = await Axios.post(
      "https://cors-anywhere.herokuapp.com/http://front-api-test.wsafar.com/users/login",
      { username, password }
    );
   
    if (data.ok) {
      dispatch({ type: "LOGIN_REQ_SUCCESS", payload: data });
      localStorage.setItem("token", (data.result.access_token));
      dispatch(postAction())
    }
  } catch (err) {
    dispatch({
      type: "LOGIN_REQ_FAIL",
      payload: err,
    });
  }
};

export const signout = () => async (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("items");
  dispatch({ type: "USER_SIGNOUT" });
};
