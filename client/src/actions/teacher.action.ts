export interface Teacher {
  name: string;
  surname: string;
  description: string;
  email: string;
}

export const TeacherActions = {
  ADD_TEACHER: "[TEACHER] ADD_TEACHER",
  EDIT_TEACHER: "[TEACHER] EDIT_TEACHER",
  DELETE_TEACHER: "[TEACHER] DELETE_TEACHER",
  GET_TEACHER: "[TEACHER] GET_TEACHER",
  ADD_TEACHER_SUCCESS: "[TEACHER] ADD_STUDEN_SUCCESST",
  EDIT_TEACHER_SUCCESS: "[TEACHER] EDIT_TEACHER_SUCCESS",
  DELETE_TEACHER_SUCCESS: "[TEACHER] DELETE_TEACHER_SUCCESS",
  GET_TEACHER_SUCCESS: "[TEACHER] GET_TEACHER_SUCCESS"
};

export const AAddTeacher = (
  payload: Teacher
): { action: string; payload: any } => ({
  action: TeacherActions.ADD_TEACHER,
  payload
});

export const AEditTeacher = (
  payload: Teacher
): { action: string; payload: any } => ({
  action: TeacherActions.EDIT_TEACHER,
  payload
});

export const ADeleteTeacher = (
  payload: Teacher
): { action: string; payload: any } => ({
  action: TeacherActions.DELETE_TEACHER,
  payload
});

export const AGetTeachers = (
  payload: Teacher
): { action: string; payload: any } => ({
  action: TeacherActions.GET_TEACHER,
  payload
});

export const AAddTeacherSucess = (): { action: string } => ({
  action: TeacherActions.ADD_TEACHER_SUCCESS
});

export const AEditStudnetSucess = (): { action: string } => ({
  action: TeacherActions.EDIT_TEACHER_SUCCESS
});

export const ADeleteTeacherSucess = (): { action: string } => ({
  action: TeacherActions.DELETE_TEACHER_SUCCESS
});

export const AGetTeachersSucess = (): { action: string } => ({
  action: TeacherActions.GET_TEACHER_SUCCESS
});
