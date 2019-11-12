import { ajax } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";

import {
  TeacherActions,
  AAddTeacherSucess,
  ADeleteTeacherSucess,
  AGetTeachersSucess,
  AEditTeacherSucess
} from "../actions/teacher.action";
import { ofType } from "redux-observable";

const API_URL = "https://api.github.com";

const fetchTeachersEpic = (action$: any) =>
  action$.pipe(
    ofType(TeacherActions.GET_TEACHER),
    mergeMap((action: any) =>
      ajax
        .getJSON(`${API_URL}/teachers`)
        .pipe(map(response => AGetTeachersSucess(action.payload)))
    )
  );

const addTeacherEpic = (action$: any) =>
  action$.pipe(
    ofType(TeacherActions.ADD_TEACHER),
    mergeMap((action: any) =>
      ajax
        .getJSON(`${API_URL}/teachers/add/${action.payload}`)
        .pipe(map(response => AAddTeacherSucess(action.payload)))
    )
  );

const deleteTeacherEpic = (action$: any) =>
  action$.pipe(
    ofType(TeacherActions.DELETE_TEACHER),
    mergeMap((action: any) =>
      ajax
        .getJSON(`${API_URL}/teachers/delete/${action.payload}`)
        .pipe(map(response => ADeleteTeacherSucess(action.payload)))
    )
  );

const editStudentEpic = (action$: any) =>
  action$.pipe(
    ofType(TeacherActions.EDIT_TEACHER),
    mergeMap((action: any) =>
      ajax
        .getJSON(`${API_URL}/teachers/edit/${action.payload}`)
        .pipe(map(response => AEditTeacherSucess(action.payload)))
    )
  );
export default [
  fetchTeachersEpic,
  addTeacherEpic,
  deleteTeacherEpic,
  editStudentEpic
];
