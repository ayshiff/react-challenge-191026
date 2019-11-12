export interface LoginPayload {
  mail: string;
  password: string;
}

export const LoginActions = {
  LOGIN: "[LOGIN] USER_LOGIN",
  LOGIN_SUCCESS: "[LOGIN] USER_LOGIN_SUCCESS",
  LOGIN_FAIL: "[LOGIN] USER_LOGIN_FAIL"
};

export const ALoginUser = (
  payload: LoginPayload
): { type: string; payload: any } => ({
  type: LoginActions.LOGIN,
  payload
});

export const ALoginUserSuccess = (
  payload: any
): { type: string; payload: any } => ({
  type: LoginActions.LOGIN_SUCCESS,
  payload
});
