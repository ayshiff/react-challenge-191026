import { StudentActions, Student, Payload } from "../actions/student.action";

const initialState: any = {
  list: [],
  fetching: false
};

export default (state = initialState, action: Payload) => {
  switch (action.type) {
    case StudentActions.FILTER_STUDENT:
      return {
        list: state.list.filter(
          (student: Student) =>
            // @ts-ignore
            student[action.payload.field] !== action.payload.value
        ),
        fetching: false
      };
    case StudentActions.SEARCH_STUDENT:
      return {
        list: state.list.filter((student: Student) =>
          // @ts-ignore
          student.name.includes(action.payload.search)
        ),
        fetching: false
      };
    case StudentActions.ADD_STUDENT_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case StudentActions.DELETE_STUDENT_SUCCESS:
      return {
        list: state.list.filter(
          (student: Student) => student.id !== action.payload.id
        ),
        fetching: false
      };
    case StudentActions.EDIT_STUDENT_SUCCESS:
      return {
        list: state.list.map((student: Student) => {
          const { id } = action.payload;
          if (student.id === id) return action.payload;
          return student;
        }),
        fetching: false
      };
    case StudentActions.ADD_STUDENT:
      return {
        ...state,
        fetching: true
      };
    case StudentActions.DELETE_STUDENT:
      return {
        ...state,
        fetching: true
      };
    case StudentActions.EDIT_STUDENT:
      return {
        ...state,
        fetching: false
      };
    case StudentActions.GET_STUDENT_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case StudentActions.GET_ALL_STUDENT_SUCCESS:
      return {
        list: action.payload,
        fetching: false
      };
    case StudentActions.GET_STUDENT:
      return {
        ...state,
        fetching: true
      };
    case StudentActions.UNSELECT_STUDENT:
      return {
        list: [],
        fetching: true
      };
    default:
      return state;
  }
};
