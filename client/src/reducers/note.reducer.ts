import { NoteActions, Note } from "../actions/note.action";

const initialState: any = {
  list: [],
  fetching: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case NoteActions.ADD_NOTE_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case NoteActions.DELETE_NOTE_SUCCESS:
      return {
        list: state.list.filter((note: Note) => note.id !== action.payload.id),
        fetching: false
      };
    case NoteActions.EDIT_NOTE_SUCCESS:
      return {
        list: state.list.map((note: Note) => {
          const { id } = action.payload;
          if (note.id === id) return action.payload;
          return note;
        }),
        fetching: false
      };
    case NoteActions.ADD_NOTE:
      return {
        ...state,
        fetching: true
      };
    case NoteActions.DELETE_NOTE:
      return {
        ...state,
        fetching: true
      };
    case NoteActions.EDIT_NOTE:
      return {
        ...state,
        fetching: false
      };
    case NoteActions.GET_NOTE_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case NoteActions.GET_NOTE:
      return {
        ...state,
        fetching: true
      };
    default:
      return state;
  }
};
