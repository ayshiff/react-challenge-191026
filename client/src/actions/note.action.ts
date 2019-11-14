import { Student } from "./student.action";
import { Teacher } from "./teacher.action";
import { Promo } from "./promo.action";

export interface Note {
  id: number;
  note: number;
  student: Student;
  teacher: Teacher;
  promo: Promo[];
  subject: {
    id: number;
    subject: string;
  };
}

export const NoteActions = {
  ADD_NOTE: "[NOTE] ADD_NOTE",
  EDIT_NOTE: "[NOTE] EDIT_NOTE",
  DELETE_NOTE: "[NOTE] DELETE_NOTE",
  GET_NOTE: "[NOTE] GET_NOTE",
  GET_ALL_NOTE: "[NOTE] GET_ALL_NOTE",
  ADD_NOTE_SUCCESS: "[NOTE] ADD_NOTE_SUCCESS",
  EDIT_NOTE_SUCCESS: "[NOTE] EDIT_NOTE_SUCCESS",
  DELETE_NOTE_SUCCESS: "[NOTE] DELETE_NOTE_SUCCESS",
  GET_NOTE_SUCCESS: "[NOTE] GET_NOTE_SUCCESS",
  GET_ALL_NOTE_SUCCESS: "[NOTE] GET_ALL_NOTE_SUCCESS",
  ADD_NOTE_FAIL: "[NOTE] ADD_NOTE_FAIL",
  EDIT_NOTE_FAIL: "[NOTE] EDIT_NOTE_FAIL",
  DELETE_NOTE_FAIL: "[NOTE] DELETE_NOTE_FAIL",
  GET_NOTE_FAIL: "[NOTE] GET_NOTE_FAIL",
  GET_ALL_NOTE_FAIL: "[NOTE] GET_ALL_NOTE_FAIL"
};

export const AAddNoteSuccess = (
  payload: Note
): { type: string; payload: Note } => ({
  type: NoteActions.ADD_NOTE_SUCCESS,
  payload
});

export const AEditNoteSuccess = (
  payload: Note
): { type: string; payload: any } => ({
  type: NoteActions.EDIT_NOTE_SUCCESS,
  payload
});

export const ADeleteNoteSuccess = (
  payload: Note
): { type: string; payload: any } => ({
  type: NoteActions.DELETE_NOTE_SUCCESS,
  payload
});

export const AGetNotesSuccess = (
  payload: Note
): { type: string; payload: any } => ({
  type: NoteActions.GET_NOTE_SUCCESS,
  payload
});

export const AGetAllNotesSuccess = (
  payload: Note
): { type: string; payload: any } => ({
  type: NoteActions.GET_ALL_NOTE_SUCCESS,
  payload
});

export const AAddNote = (payload: Note): { type: string; payload: Note } => ({
  type: NoteActions.ADD_NOTE,
  payload
});

export const AEditNote = (): { type: string } => ({
  type: NoteActions.EDIT_NOTE
});

export const ADeleteNote = (): { type: string } => ({
  type: NoteActions.DELETE_NOTE
});

export const AGetNotes = (): { type: string } => ({
  type: NoteActions.GET_NOTE
});

export const AGetAllNotes = (): { type: string } => ({
  type: NoteActions.GET_ALL_NOTE
});
