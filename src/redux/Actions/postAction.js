import Axios from "axios";
export const postAction = () => async (dispatch, getState) => {
  dispatch({ type: "POST_REQ_SEND" });

  const token = localStorage.getItem("token");
  if (token) Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  try {
    const { data } = await Axios.get(
      "https://cors-anywhere.herokuapp.com/http://front-api-test.wsafar.com/posts"
    );
   
    dispatch({ type: "POST_REQ_SUCCESS", payload: data.result.items });
    localStorage.setItem("items", JSON.stringify(getState().posts.items));
  } catch (err) {
   
    dispatch({ type: "POST_REQ_FAIL", payload: err });
  }
};
