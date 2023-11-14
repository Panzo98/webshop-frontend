export const userReducer = (
  state = { user: {}, isLoggedIn: false },
  action
) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return {
        user: action.payload,
        isLoggedIn: true,
      };
    }
    case "USER_LOGOUT": {
      localStorage.removeItem("token");
      return {
        user: {},
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};
