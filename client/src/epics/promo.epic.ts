import { ajax } from "rxjs/ajax";
import { map, mergeMap, mapTo, delay } from "rxjs/operators";

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
      ajax
        .getJSON(`${API_URL}/promo/${action.payload}`)
        .pipe(map(response => AGetPromosSuccess(action.payload)))
    )
  );
};

const fetchAllPromosEpic = (action$: any) => {
  return action$.pipe(
    ofType(PromoActions.GET_ALL_PROMO),
    mergeMap((action: any) =>
      ajax
        .getJSON(`${API_URL}/promos/${action.payload}`)
        .pipe(map(response => AGetAllPromosSuccess(action.payload)))
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
      ajax
        .getJSON(`${API_URL}/promo/${action.payload}`)
        .pipe(map(response => ADeletePromoSuccess(action.payload)))
    )
  );

const editPromoEpic = (action$: any) =>
  action$.pipe(
    ofType(PromoActions.EDIT_PROMO),
    mergeMap((action: any) =>
      ajax
        .getJSON(`${API_URL}/promo/${action.payload}`)
        .pipe(map(response => AEditPromoSuccess(action.payload)))
    )
  );

export default [
  fetchPromosEpic,
  addPromoEpic,
  deletePromoEpic,
  editPromoEpic,
  fetchAllPromosEpic
];
