export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQ_SEND`":
      return { loading: true };
    case "LOGIN_REQ_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "LOGIN_REQ_FAIL":
      return { loading: false, error: action.payload };
    case "USER_SIGNOUT":
      return {};
    default:
      return state;
  }
};
