import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { LoginActions, ALoginUserSuccess } from "../actions/login.action";
import { ofType } from "redux-observable";

const API_URL = "http://51.158.111.46:8000";

const loginUserEpic = (action$: any) => {
  return action$.pipe(
    ofType(LoginActions.LOGIN),
    mergeMap((action: any) =>
      ajax({
        url: `${API_URL}/authentification_token`,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          mail: action.payload.mail,
          password: action.payload.password
        }
      }).pipe(
        map((response: any) => ALoginUserSuccess(response.token)),
        catchError(error =>
          of({
            type: LoginActions.LOGIN_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
};

export default [loginUserEpic];
