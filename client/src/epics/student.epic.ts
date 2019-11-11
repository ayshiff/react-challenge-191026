import { ajax } from "rxjs/ajax";
import { map, mergeMap, mapTo, delay } from "rxjs/operators";

import {
  AAddStudent,
  AEditStudnet,
  ADeleteStudent,
  StudentActions,
  AGetStudentsSucess,
  AAddStudentSucess,
  AGetStudents
} from "../actions/student.action";
import { ofType } from "redux-observable";

const fetchStudentsEpic = (action$: any) => {
  return action$.pipe(
    ofType(StudentActions.GET_STUDENT),
    mapTo(
      AGetStudentsSucess({
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

export default [fetchStudentsEpic, addStudentEpic];
