import {
  AAddStudent,
  ADeleteStudent,
  AEditStudnet,
  AAddStudentSucess,
  ADeleteStudentSucess,
  AEditStudnetSucess,
  AGetStudents,
  AGetStudentsSucess
} from "../actions/student.action";

const initialState: any = {
  status: [],
  fetching: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case AAddStudent:
      return {
        ...state,
        student: state.student.concat(action.payload),
        fetching: true
      };
    case ADeleteStudent:
      return {
        ...state,
        student: state.student.concat(action.payload),
        fetching: true
      };
    case AEditStudnet:
      return {
        ...state,
        student: state.student.concat(action.payload),
        fetching: true
      };
    case AAddStudentSucess:
      return { ...state, fetching: false };
    case ADeleteStudentSucess:
      return { ...state, fetching: false };
    case AEditStudnetSucess:
      return { ...state, fetching: false };
    case AGetStudents:
      return {
        ...state,
        student: state.student.concat(action.payload),
        fetching: true
      };
    case AGetStudentsSucess:
      return { ...state, fetching: false };
    default:
      return state;
  }
};
