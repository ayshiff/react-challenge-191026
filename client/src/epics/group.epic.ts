import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import {
  GroupActions,
  AGetGroupsSuccess,
  AAddGroupSuccess,
  AEditGroupSuccess,
  ADeleteGroupSuccess,
  AGetAllGroupsSuccess
} from "../actions/group.action";
import { ofType } from "redux-observable";

const API_URL = "https://api.github.com";

const fetchGroupsEpic = (action$: any) => {
  return action$.pipe(
    ofType(GroupActions.GET_GROUP),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/group/${action.payload}`).pipe(
        map(response => AGetGroupsSuccess(action.payload)),
        catchError(error =>
          of({
            type: GroupActions.GET_GROUP_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
};

const fetchAllGroupsEpic = (action$: any) => {
  return action$.pipe(
    ofType(GroupActions.GET_ALL_GROUP),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/groups/${action.payload}`).pipe(
        map(response => AGetAllGroupsSuccess(action.payload)),
        catchError(error =>
          of({
            type: GroupActions.GET_ALL_GROUP_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
};

const addGroupEpic = (action$: any) =>
  action$.pipe(
    ofType(GroupActions.ADD_GROUP),
    map((action: any) => {
      return AAddGroupSuccess(action.payload);
    })
  );

const deleteGroupEpic = (action$: any) =>
  action$.pipe(
    ofType(GroupActions.DELETE_GROUP),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/group/${action.payload}`).pipe(
        map(response => ADeleteGroupSuccess(action.payload)),
        catchError(error =>
          of({
            type: GroupActions.DELETE_GROUP_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

const editGroupEpic = (action$: any) =>
  action$.pipe(
    ofType(GroupActions.EDIT_GROUP),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/group/${action.payload}`).pipe(
        map(response => AEditGroupSuccess(action.payload)),
        catchError(error =>
          of({
            type: GroupActions.EDIT_GROUP_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

export default [
  fetchGroupsEpic,
  addGroupEpic,
  deleteGroupEpic,
  editGroupEpic,
  fetchAllGroupsEpic
];
