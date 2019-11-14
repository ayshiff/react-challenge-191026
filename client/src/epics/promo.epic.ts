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

const API_URL = "http://51.158.111.46:8000/api/promos";

const fetchPromosEpic = (action$: any) => {
  return action$.pipe(
    ofType(PromoActions.GET_PROMO),
    mergeMap((action: any) =>
      ajax({
        url: `${API_URL}/${action.payload.id}`,
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-type": "application/json"
        },
        body: action.payload
      }).pipe(
        map(data => AGetPromosSuccess(data.response)),
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
      ajax({
        url: `${API_URL}`,
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-type": "application/json"
        },
        body: action.payload
      }).pipe(
        map(data => AGetAllPromosSuccess(data.response)),
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
    mergeMap((action: any) =>
      ajax({
        url: `${API_URL}`,
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(action.payload)
      }).pipe(
        map(data => AAddPromoSuccess(data.response)),
        catchError(error =>
          of({
            type: PromoActions.ADD_PROMO_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

const deletePromoEpic = (action$: any) =>
  action$.pipe(
    ofType(PromoActions.DELETE_PROMO),
    mergeMap((action: any) =>
      ajax({
        url: `${API_URL}/${action.payload.id}`,
        method: "DELETE",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
          Authorization: localStorage.getItem("token")
        },
        body: action.payload
      }).pipe(
        map(data => ADeletePromoSuccess(data.response)),
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
      ajax({
        url: `${API_URL}/${action.payload.id}`,
        method: "PUT",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
          Authorization: localStorage.getItem("token")
        },
        body: action.payload
      }).pipe(
        map(data => AEditPromoSuccess(data.response)),
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
