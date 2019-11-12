import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

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
      ajax.getJSON(`${API_URL}/teachers`).pipe(
        map(response => AGetTeachersSucess(action.payload)),
        catchError(error =>
          of({
            type: TeacherActions.GET_TEACHER_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

const addTeacherEpic = (action$: any) =>
  action$.pipe(
    ofType(TeacherActions.ADD_TEACHER),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/teachers/add/${action.payload}`).pipe(
        map(response => AAddTeacherSucess(action.payload)),
        catchError(error =>
          of({
            type: TeacherActions.ADD_TEACHER_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

const deleteTeacherEpic = (action$: any) =>
  action$.pipe(
    ofType(TeacherActions.DELETE_TEACHER),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/teachers/delete/${action.payload}`).pipe(
        map(response => ADeleteTeacherSucess(action.payload)),
        catchError(error =>
          of({
            type: TeacherActions.DELETE_TEACHER_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

const editStudentEpic = (action$: any) =>
  action$.pipe(
    ofType(TeacherActions.EDIT_TEACHER),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/teachers/edit/${action.payload}`).pipe(
        map(response => AEditTeacherSucess(action.payload)),
        catchError(error =>
          of({
            type: TeacherActions.EDIT_TEACHER_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
export default [
  fetchTeachersEpic,
  addTeacherEpic,
  deleteTeacherEpic,
  editStudentEpic
];
