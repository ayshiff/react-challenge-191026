import {
  AAddTeacher,
  ADeleteTeacher,
  AEditTeacher,
  AAddTeacherSucess,
  ADeleteTeacherSucess,
  AEditTeacherSucess,
  AGetTeachers,
  AGetTeachersSucess,
  TeacherActions
} from "../actions/teacher.action";

const initialState: any = {
  list: [],
  fetching: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case TeacherActions.ADD_TEACHER_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case TeacherActions.DELETE_TEACHER_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case TeacherActions.EDIT_TEACHER_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case TeacherActions.ADD_TEACHER:
      return {
        ...state,
        fetching: true
      };
    case TeacherActions.DELETE_TEACHER:
      return {
        ...state,
        fetching: true
      };
    case TeacherActions.EDIT_TEACHER:
      return {
        ...state,
        fetching: true
      };
    case TeacherActions.GET_TEACHER_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case TeacherActions.GET_TEACHER:
      return {
        ...state,
        fetching: true
      };
    default:
      return state;
  }
};
