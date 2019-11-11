export interface Student {
  name: string;
  ux: string;
  ui: string;
  frontend: string;
  backend: string;
  projectManagement: string;
}

export const StudentActions = {
  ADD_STUDENT: "[STUDENT] ADD_STUDENT",
  EDIT_STUDENT: "[STUDENT] EDIT_STUDENT",
  DELETE_STUDENT: "[STUDENT] DELETE_STUDENT",
  GET_STUDENT: "[STUDENT] GET_STUDENT",
  ADD_STUDENT_SUCCESS: "[STUDENT] ADD_STUDEN_SUCCESST",
  EDIT_STUDENT_SUCCESS: "[STUDENT] EDIT_STUDENT_SUCCESS",
  DELETE_STUDENT_SUCCESS: "[STUDENT] DELETE_STUDENT_SUCCESS",
  GET_STUDENT_SUCCESS: "[STUDENT] GET_STUDENT_SUCCESS"
};

export const AAddStudentSucess = (
  payload: Student
): { type: string; payload: any } => ({
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

export const AAddStudent = (
  payload: Student
): { type: string; payload: any } => ({
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
