import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import { LoginActions, ALoginUserSuccess } from "../actions/login.action";
import { ofType } from "redux-observable";

const API_URL = "https://api.github.com";

const loginUserEpic = (action$: any) => {
  return action$.pipe(
    ofType(LoginActions.LOGIN),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/login/${action.payload}`).pipe(
        map(response => ALoginUserSuccess(action.payload)),
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
