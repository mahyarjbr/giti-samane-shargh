export const postReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case "POST_REQ_SEND":
      return { loading: true };
    case "POST_REQ_SUCCESS":
      return { loading: false, items: action.payload };
    case "POST_REQ_FAIL":
      return { loading: false, error: action.payload };
    case "USER_SIGNOUT":
      return { items: [] };
    default:
      return state;
  }
};
