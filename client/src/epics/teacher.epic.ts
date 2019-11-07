import { ajax } from 'rxjs/ajax';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';

import {
} from '../actions/teacher.action';


const fetchStudentsEpic = (action$: any) =>
    action$.ofType(StudentActions.GET_STUDENT)
        .mergeMap(({payload}: any) =>
            ajax({
                method: 'PATCH',
                url: payload.url,
                body: JSON.stringify(payload),
            }).pipe(
                map((resp: any) => AAddStudent(resp))
            )
        );
const addStudentEpic = (action$: any) =>
    action$.ofType(StudentActions.ADD_STUDENT)
        .mergeMap(({payload}: any) =>
            ajax({
                method: 'POST',
                url: payload.url,
                body: JSON.stringify(payload),
            }).pipe(
                map((resp: any) => AAddStudent(resp))
            )
        );
export default [
    fetchStudentsEpic,
    addStudentEpic
]
