import {
  AAddTeacher,
  ADeleteTeacher,
  AEditTeacher,
  AAddTeacherSucess,
  ADeleteTeacherSucess,
  AEditStudnetSucess,
  AGetTeachers,
  AGetTeachersSucess
} from "../actions/teacher.action";

const initialState: any = {
  status: [],
  fetching: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case AAddTeacher:
      return {
        ...state,
        Teacher: state.Teacher.concat(action.payload),
        fetching: true
      };
    case ADeleteTeacher:
      return {
        ...state,
        Teacher: state.Teacher.concat(action.payload),
        fetching: true
      };
    case AEditTeacher:
      return {
        ...state,
        Teacher: state.Teacher.concat(action.payload),
        fetching: true
      };
    case AAddTeacherSucess:
      return { ...state, fetching: false };
    case ADeleteTeacherSucess:
      return { ...state, fetching: false };
    case AEditStudnetSucess:
      return { ...state, fetching: false };
    case AGetTeachers:
      return {
        ...state,
        Teacher: state.Teacher.concat(action.payload),
        fetching: true
      };
    case AGetTeachersSucess:
      return { ...state, fetching: false };
    default:
      return state;
  }
};
