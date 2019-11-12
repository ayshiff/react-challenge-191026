import { ajax } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";

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
      ajax
        .getJSON(`${API_URL}/group/${action.payload}`)
        .pipe(map(response => AGetGroupsSuccess(action.payload)))
    )
  );
};

const fetchAllGroupsEpic = (action$: any) => {
  return action$.pipe(
    ofType(GroupActions.GET_ALL_GROUP),
    mergeMap((action: any) =>
      ajax
        .getJSON(`${API_URL}/groups/${action.payload}`)
        .pipe(map(response => AGetAllGroupsSuccess(action.payload)))
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
      ajax
        .getJSON(`${API_URL}/group/${action.payload}`)
        .pipe(map(response => ADeleteGroupSuccess(action.payload)))
    )
  );

const editGroupEpic = (action$: any) =>
  action$.pipe(
    ofType(GroupActions.EDIT_GROUP),
    mergeMap((action: any) =>
      ajax
        .getJSON(`${API_URL}/group/${action.payload}`)
        .pipe(map(response => AEditGroupSuccess(action.payload)))
    )
  );

export default [
  fetchGroupsEpic,
  addGroupEpic,
  deleteGroupEpic,
  editGroupEpic,
  fetchAllGroupsEpic
];
