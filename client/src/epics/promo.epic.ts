import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import {
  PromoActions,
  AGetPromosSuccess,
  AAddPromoSuccess,
  AEditPromoSuccess,
  ADeletePromoSuccess,
  AGetAllPromosSuccess
} from "../actions/promo.action";
import { ofType } from "redux-observable";

const API_URL = "https://api.github.com";

const fetchPromosEpic = (action$: any) => {
  return action$.pipe(
    ofType(PromoActions.GET_PROMO),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/promo/${action.payload}`).pipe(
        map(response => AGetPromosSuccess(action.payload)),
        catchError(error =>
          of({
            type: PromoActions.GET_PROMO_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
};

const fetchAllPromosEpic = (action$: any) => {
  return action$.pipe(
    ofType(PromoActions.GET_ALL_PROMO),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/promos/${action.payload}`).pipe(
        map(response => AGetAllPromosSuccess(action.payload)),
        catchError(error =>
          of({
            type: PromoActions.GET_ALL_PROMO_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
};

const addPromoEpic = (action$: any) =>
  action$.pipe(
    ofType(PromoActions.ADD_PROMO),
    map((action: any) => {
      return AAddPromoSuccess(action.payload);
    })
  );

const deletePromoEpic = (action$: any) =>
  action$.pipe(
    ofType(PromoActions.DELETE_PROMO),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/promo/${action.payload}`).pipe(
        map(response => ADeletePromoSuccess(action.payload)),
        catchError(error =>
          of({
            type: PromoActions.DELETE_PROMO_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

const editPromoEpic = (action$: any) =>
  action$.pipe(
    ofType(PromoActions.EDIT_PROMO),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/promo/${action.payload}`).pipe(
        map(response => AEditPromoSuccess(action.payload)),
        catchError(error =>
          of({
            type: PromoActions.EDIT_PROMO_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

export default [
  fetchPromosEpic,
  addPromoEpic,
  deletePromoEpic,
  editPromoEpic,
  fetchAllPromosEpic
];
