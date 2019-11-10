import { ajax } from "rxjs/ajax";
import { map, mergeMap } from "rxjs/operators";

import {
  AAddTeacher,
  AEditTeacher,
  ADeleteTeacher,
  TeacherActions,
  AGetTeachersSucess,
  AAddTeacherSucess
} from "../actions/teacher.action";
import { ofType } from "redux-observable";

const fetchTeachersEpic = (action$: any) =>
  action$.pipe(
    ofType(AAddTeacher)
    // mergeMap((action: any) =>
    //   ajax
    //     .getJSON(`https://api.github.com/users/${action.payload}`)
    //     .pipe(map(response => AGetTeachersSucess()))
    // )
  );

const addTeacherEpic = (action$: any) =>
  action$.pipe(
    ofType(AAddTeacher)
    // mergeMap((action: any) =>
    //   ajax
    //     .getJSON(`https://api.github.com/users/${action.payload}`)
    //     .pipe(map(response => AAddTeacherSucess()))
    // )
  );
export default [fetchTeachersEpic, addTeacherEpic];
