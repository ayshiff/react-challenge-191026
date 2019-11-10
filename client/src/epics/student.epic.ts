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
        surname: "ok2",
        description: "description",
        email: "emailtest"
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
    mapTo(
      AAddStudentSucess({
        name: "ok",
        surname: "ok2",
        description: "description",
        email: "emailtest"
      })
    )
    // mergeMap((action: any) =>
    //   ajax
    //     .getJSON(`https://api.github.com/users/${action.payload}`)
    //     .pipe(map(response => AAddStudentSucess()))
    // )
  );
export default [fetchStudentsEpic, addStudentEpic];
