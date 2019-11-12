import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import {
  StudentActions,
  AGetStudentsSucess,
  AAddStudentSucess,
  AEditStudnetSucess,
  ADeleteStudentSucess,
  AGetAllStudentsSucess
} from "../actions/student.action";
import { ofType } from "redux-observable";

const API_URL = "https://api.github.com";

const fetchStudentsEpic = (action$: any) => {
  return action$.pipe(
    ofType(StudentActions.GET_STUDENT),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/student/${action.payload}`).pipe(
        map(response => AGetStudentsSucess(action.payload)),
        catchError(error =>
          of({
            type: StudentActions.GET_STUDENT_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
};

const fetchAllStudentsEpic = (action$: any) => {
  return action$.pipe(
    ofType(StudentActions.GET_ALL_STUDENT),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/students/${action.payload}`).pipe(
        map(response => AGetAllStudentsSucess(action.payload)),
        catchError(error =>
          of({
            type: StudentActions.GET_ALL_STUDENT_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
};

const addStudentEpic = (action$: any) =>
  action$.pipe(
    ofType(StudentActions.ADD_STUDENT),
    map((action: any) => {
      return AAddStudentSucess(action.payload);
    })
  );

const deleteStudentEpic = (action$: any) =>
  action$.pipe(
    ofType(StudentActions.DELETE_STUDENT),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/student/${action.payload}`).pipe(
        map(response => ADeleteStudentSucess(action.payload)),
        catchError(error =>
          of({
            type: StudentActions.DELETE_STUDENT_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

const editStudentEpic = (action$: any) =>
  action$.pipe(
    ofType(StudentActions.EDIT_STUDENT),
    mergeMap((action: any) =>
      ajax.getJSON(`${API_URL}/student/${action.payload}`).pipe(
        map(response => AEditStudnetSucess(action.payload)),
        catchError(error =>
          of({
            type: StudentActions.EDIT_STUDENT_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

export default [
  fetchStudentsEpic,
  addStudentEpic,
  deleteStudentEpic,
  editStudentEpic,
  fetchAllStudentsEpic
];
