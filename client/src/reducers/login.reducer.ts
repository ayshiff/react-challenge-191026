import { LoginActions } from "../actions/login.action";

const initialState: any = {
  auth: false,
  message: ""
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload);
      return {
        auth: true
      };
    case LoginActions.LOGIN_FAIL:
      return {
        auth: false,
        message: ""
      };
    default:
      return state;
  }
};
