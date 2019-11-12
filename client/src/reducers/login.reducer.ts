import { LoginActions } from "../actions/login.action";

const initialState: any = {
  auth: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS:
      return {
        auth: true
      };
    default:
      return state;
  }
};
