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

const API_URL = "http://51.158.111.46:8000/api/students";

const fetchStudentsEpic = (action$: any) => {
  return action$.pipe(
    ofType(StudentActions.GET_STUDENT),
    mergeMap((action: any) =>
      ajax({
        url: `${API_URL}/${action.payload.id}`,
        method: "GET",
        headers: { accept: "application/json" }
      }).pipe(
        map(data => AGetStudentsSucess(data.response)),
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
      ajax({
        url: `${API_URL}`,
        method: "GET",
        headers: {
          accept: "application/json"
        }
      }).pipe(
        map(data => AGetAllStudentsSucess(data.response)),
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
    mergeMap((action: any) =>
      ajax({
        url: `${API_URL}`,
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: localStorage.getItem("token")
        },
        body: action.payload
      }).pipe(
        map(data => AAddStudentSucess(data.response)),
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

const deleteStudentEpic = (action$: any) =>
  action$.pipe(
    ofType(StudentActions.DELETE_STUDENT),
    mergeMap((action: any) =>
      ajax({
        url: `${API_URL}`,
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: localStorage.getItem("token")
        },
        body: action.payload
      }).pipe(
        map(data => ADeleteStudentSucess(data.response)),
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
      ajax({
        url: `${API_URL}/${action.payload.id}`,
        method: "PUT",
        headers: {
          accept: "application/json",
          Authorization: localStorage.getItem("token")
        },
        body: action.payload
      }).pipe(
        map(data => AEditStudnetSucess(data.response)),
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
