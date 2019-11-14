import { ajax } from "rxjs/ajax";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import {
  NoteActions,
  AGetNotesSuccess,
  AAddNoteSuccess,
  AEditNoteSuccess,
  ADeleteNoteSuccess,
  AGetAllNotesSuccess
} from "../actions/note.action";
import { ofType } from "redux-observable";

const API_URL = "http://51.158.111.46:8000/api/notes";

const fetchNotesEpic = (action$: any) => {
  return action$.pipe(
    ofType(NoteActions.GET_NOTE),
    mergeMap((action: any) =>
      ajax({
        url: `${API_URL}/${action.payload.id}`,
        method: "GET",
        headers: {
          accept: "application/json"
        },
        body: action.payload
      }).pipe(
        map(data => AGetNotesSuccess(data.response)),
        catchError(error =>
          of({
            type: NoteActions.GET_NOTE_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
};

const fetchAllNotesEpic = (action$: any) => {
  return action$.pipe(
    ofType(NoteActions.GET_ALL_NOTE),
    mergeMap((action: any) =>
      ajax({
        url: `${API_URL}`,
        method: "GET",
        headers: {
          accept: "application/json"
        },
        body: action.payload
      }).pipe(
        map(data => AGetAllNotesSuccess(data.response)),
        catchError(error =>
          of({
            type: NoteActions.GET_ALL_NOTE_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );
};

const addNoteEpic = (action$: any) =>
  action$.pipe(
    ofType(NoteActions.ADD_NOTE),
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
        map(data => AAddNoteSuccess(data.response)),
        catchError(error =>
          of({
            type: NoteActions.DELETE_NOTE_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

const deleteNoteEpic = (action$: any) =>
  action$.pipe(
    ofType(NoteActions.DELETE_NOTE),
    mergeMap((action: any) =>
      ajax({
        url: `${API_URL}/${action.payload.id}`,
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: localStorage.getItem("token")
        },
        body: action.payload
      }).pipe(
        map(data => ADeleteNoteSuccess(data.response)),
        catchError(error =>
          of({
            type: NoteActions.DELETE_NOTE_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

const editNoteEpic = (action$: any) =>
  action$.pipe(
    ofType(NoteActions.EDIT_NOTE),
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
        map(data => AEditNoteSuccess(data.response)),
        catchError(error =>
          of({
            type: NoteActions.EDIT_NOTE_FAIL,
            payload: error.xhr.response,
            error: true
          })
        )
      )
    )
  );

export default [
  fetchNotesEpic,
  addNoteEpic,
  deleteNoteEpic,
  editNoteEpic,
  fetchAllNotesEpic
];
