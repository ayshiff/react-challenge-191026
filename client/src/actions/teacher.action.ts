export interface Teacher {
  id: number;
  firstname: string;
  lastname: string;
  mail: string;
  password: string;
}

export const TeacherActions = {
  ADD_TEACHER: "[TEACHER] ADD_TEACHER",
  EDIT_TEACHER: "[TEACHER] EDIT_TEACHER",
  DELETE_TEACHER: "[TEACHER] DELETE_TEACHER",
  GET_TEACHER: "[TEACHER] GET_TEACHER",
  ADD_TEACHER_SUCCESS: "[TEACHER] ADD_STUDEN_SUCCESS",
  EDIT_TEACHER_SUCCESS: "[TEACHER] EDIT_TEACHER_SUCCESS",
  DELETE_TEACHER_SUCCESS: "[TEACHER] DELETE_TEACHER_SUCCESS",
  GET_TEACHER_SUCCESS: "[TEACHER] GET_TEACHER_SUCCESS",
  ADD_TEACHER_FAIL: "[TEACHER] ADD_STUDEN_FAIL",
  EDIT_TEACHER_FAIL: "[TEACHER] EDIT_TEACHER_FAIL",
  DELETE_TEACHER_FAIL: "[TEACHER] DELETE_TEACHER_FAIL",
  GET_TEACHER_FAIL: "[TEACHER] GET_TEACHER_FAIL"
};

export const AAddTeacherSucess = (
  payload: Teacher
): { type: string; payload: Teacher } => ({
  type: TeacherActions.ADD_TEACHER_SUCCESS,
  payload
});

export const AEditTeacherSucess = (
  payload: Teacher
): { type: string; payload: any } => ({
  type: TeacherActions.EDIT_TEACHER_SUCCESS,
  payload
});

export const ADeleteTeacherSucess = (
  payload: Teacher
): { type: string; payload: any } => ({
  type: TeacherActions.DELETE_TEACHER_SUCCESS,
  payload
});

export const AGetTeachersSucess = (
  payload: Teacher
): { type: string; payload: any } => ({
  type: TeacherActions.GET_TEACHER_SUCCESS,
  payload
});

export const AAddTeacher = (): { type: string } => ({
  type: TeacherActions.ADD_TEACHER
});

export const AEditTeacher = (): { type: string } => ({
  type: TeacherActions.EDIT_TEACHER
});

export const ADeleteTeacher = (): { type: string } => ({
  type: TeacherActions.DELETE_TEACHER
});

export const AGetTeachers = (): { type: string } => ({
  type: TeacherActions.GET_TEACHER
});
