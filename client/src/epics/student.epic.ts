import { ajax } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";

import {
  AAddStudent,
  AEditStudnet,
  ADeleteStudent,
  StudentActions,
  AGetStudentsSucess,
  AAddStudentSucess
} from "../actions/student.action";
import { ofType } from "redux-observable";

const fetchStudentsEpic = (action$: any) =>
  action$.pipe(
    ofType(AAddStudent),
    mergeMap((action: any) =>
      ajax
        .getJSON(`https://api.github.com/users/${action.payload}`)
        .pipe(map(response => AGetStudentsSucess()))
    )
  );

const addStudentEpic = (action$: any) =>
  action$.pipe(
    ofType(AAddStudent),
    mergeMap((action: any) =>
      ajax
        .getJSON(`https://api.github.com/users/${action.payload}`)
        .pipe(map(response => AAddStudentSucess()))
    )
  );
export default [fetchStudentsEpic, addStudentEpic];
