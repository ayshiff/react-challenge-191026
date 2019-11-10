export interface Student {
  name: string;
  surname: string;
  description: string;
  email: string;
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

export const AAddStudent = (
  payload: Student
): { action: string; payload: any } => ({
  action: StudentActions.ADD_STUDENT,
  payload
});

export const AEditStudnet = (
  payload: Student
): { action: string; payload: any } => ({
  action: StudentActions.EDIT_STUDENT,
  payload
});

export const ADeleteStudent = (
  payload: Student
): { action: string; payload: any } => ({
  action: StudentActions.DELETE_STUDENT,
  payload
});

export const AGetStudents = (
  payload: Student
): { action: string; payload: any } => ({
  action: StudentActions.GET_STUDENT,
  payload
});

export const AAddStudentSucess = (): { action: string } => ({
  action: StudentActions.ADD_STUDENT_SUCCESS
});

export const AEditStudnetSucess = (): { action: string } => ({
  action: StudentActions.EDIT_STUDENT_SUCCESS
});

export const ADeleteStudentSucess = (): { action: string } => ({
  action: StudentActions.DELETE_STUDENT_SUCCESS
});

export const AGetStudentsSucess = (): { action: string } => ({
  action: StudentActions.GET_STUDENT_SUCCESS
});
