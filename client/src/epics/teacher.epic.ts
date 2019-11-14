import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import {
  TeacherActions,
  AAddTeacherSucess,
  ADeleteTeacherSucess,
  AGetTeachersSucess,
  AEditTeacherSucess,
  AGetAllTeachersSucess
} from "../actions/teacher.action";
import { ofType } from "redux-observable";

const API_URL = "http://51.158.111.46:8000/api/teachers";

const fetchTeachersEpic = (action$: any) =>
  action$.pipe(
    ofType(TeacherActions.GET_TEACHER),
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
        map(data => AGetTeachersSucess(data.response)),
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

const fetchAppTeachersEpic = (action$: any) =>
  action$.pipe(
    ofType(TeacherActions.GET_ALL_TEACHER),
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
        map(data => AGetAllTeachersSucess(data.response)),
        catchError(error =>
          of({
            type: TeacherActions.GET_ALL_TEACHER_FAIL,
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
      ajax({
        url: `${API_URL}`,
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: localStorage.getItem("token"),
          "Content-type": "application/json"
        },
        body: action.payload
      }).pipe(
        map(data => AAddTeacherSucess(data.response)),
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
      ajax({
        url: `${API_URL}/${action.payload.id}`,
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: localStorage.getItem("token"),
          "Content-type": "application/json"
        },
        body: action.payload
      }).pipe(
        map(data => ADeleteTeacherSucess(data.response)),
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
      ajax({
        url: `${API_URL}/${action.payload.id}`,
        method: "PUT",
        headers: {
          accept: "application/json",
          Authorization: localStorage.getItem("token"),
          "Content-type": "application/json"
        },
        body: action.payload
      }).pipe(
        map(data => AEditTeacherSucess(data.response)),
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
  editStudentEpic,
  fetchAppTeachersEpic
];
