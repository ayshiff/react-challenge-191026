export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  mail: string;
  promoId: number;
  resume: string;
  photo: string;
  link: string;
  name: string;
  ux: string;
  ui: string;
  frontend: string;
  backend: string;
  projectManagement: string;

  // FilterPayload
  field?: string;
  value?: string;
}

export interface filterPayload {
  id?: string;
  field: string;
  value: string;
}

export interface searchPayload {
  search: string;
}

export interface Payload {
  type: string;
  payload: Student | filterPayload;
}

export const StudentActions = {
  ADD_STUDENT: "[STUDENT] ADD_STUDENT",
  EDIT_STUDENT: "[STUDENT] EDIT_STUDENT",
  DELETE_STUDENT: "[STUDENT] DELETE_STUDENT",
  GET_STUDENT: "[STUDENT] GET_STUDENT",
  GET_ALL_STUDENT: "[STUDENT] GET_ALL_STUDENT",
  GET_ALL_STUDENT_SUCCESS: "[STUDENT] GET_ALL_STUDENT_SUCCESS",
  ADD_STUDENT_SUCCESS: "[STUDENT] ADD_STUDEN_SUCCESS",
  EDIT_STUDENT_SUCCESS: "[STUDENT] EDIT_STUDENT_SUCCESS",
  DELETE_STUDENT_SUCCESS: "[STUDENT] DELETE_STUDENT_SUCCESS",
  GET_STUDENT_SUCCESS: "[STUDENT] GET_STUDENT_SUCCESS",
  GET_ALL_STUDENT_FAIL: "[STUDENT] GET_ALL_STUDENT_FAIL",
  ADD_STUDENT_FAIL: "[STUDENT] ADD_STUDEN_FAIL",
  EDIT_STUDENT_FAIL: "[STUDENT] EDIT_STUDENT_FAIL",
  DELETE_STUDENT_FAIL: "[STUDENT] DELETE_STUDENT_FAIL",
  GET_STUDENT_FAIL: "[STUDENT] GET_STUDENT_FAIL",
  FILTER_STUDENT: "[STUDENT] FILTER",
  SEARCH_STUDENT: "[STUDENT] SEARCH"
};

export const AFilterStudent = (
  payload: filterPayload
): { type: string; payload: any } => ({
  type: StudentActions.FILTER_STUDENT,
  payload
});

export const ASearchStudent = (
  payload: searchPayload
): { type: string; payload: any } => ({
  type: StudentActions.SEARCH_STUDENT,
  payload
});

export const AAddStudentSucess = (
  payload: Student
): { type: string; payload: Student } => ({
  type: StudentActions.ADD_STUDENT_SUCCESS,
  payload
});

export const AEditStudnetSucess = (
  payload: Student
): { type: string; payload: any } => ({
  type: StudentActions.EDIT_STUDENT_SUCCESS,
  payload
});

export const ADeleteStudentSucess = (
  payload: Student
): { type: string; payload: any } => ({
  type: StudentActions.DELETE_STUDENT_SUCCESS,
  payload
});

export const AGetStudentsSucess = (
  payload: Student
): { type: string; payload: any } => ({
  type: StudentActions.GET_STUDENT_SUCCESS,
  payload
});

export const AGetAllStudentsSucess = (
  payload: Student
): { type: string; payload: any } => ({
  type: StudentActions.GET_ALL_STUDENT_SUCCESS,
  payload
});

export const AAddStudent = (
  payload: Student
): { type: string; payload: Student } => ({
  type: StudentActions.ADD_STUDENT,
  payload
});

export const AEditStudnet = (): { type: string } => ({
  type: StudentActions.EDIT_STUDENT
});

export const ADeleteStudent = (): { type: string } => ({
  type: StudentActions.DELETE_STUDENT
});

export const AGetStudents = (): { type: string } => ({
  type: StudentActions.GET_STUDENT
});

export const AGetAllStudents = (): { type: string } => ({
  type: StudentActions.GET_ALL_STUDENT
});
