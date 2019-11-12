import { ajax } from "rxjs/ajax";
import { map, mergeMap, mapTo, delay } from "rxjs/operators";

import {
  StudentActions,
  AGetStudentsSucess,
  AAddStudentSucess,
  AEditStudnetSucess,
  ADeleteStudentSucess
} from "../actions/student.action";
import { ofType } from "redux-observable";

const API_URL = "https://api.github.com";

const fetchStudentsEpic = (action$: any) => {
  return action$.pipe(
    ofType(StudentActions.GET_STUDENT),
    mapTo(
      AGetStudentsSucess({
        id: "test",
        name: "ok",
        ux: "A",
        ui: "A",
        frontend: "A",
        backend: "A",
        projectManagement: "A"
      })
    )
    //   ajax
    //     .getJSON(`https://api.github.com/users/${action.payload}`)
    //     .pipe(map(response => AGetStudentsSucess()))
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
      ajax
        .getJSON(`${API_URL}/student/${action.payload}`)
        .pipe(map(response => ADeleteStudentSucess(action.payload)))
    )
  );

const editStudentEpic = (action$: any) =>
  action$.pipe(
    ofType(StudentActions.EDIT_STUDENT),
    mergeMap((action: any) =>
      ajax
        .getJSON(`${API_URL}/student/${action.payload}`)
        .pipe(map(response => AEditStudnetSucess(action.payload)))
    )
  );

export default [
  fetchStudentsEpic,
  addStudentEpic,
  deleteStudentEpic,
  editStudentEpic
];
