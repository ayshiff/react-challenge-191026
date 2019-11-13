import { GroupActions, Group } from "../actions/group.action";

const initialState: any = {
  list: [],
  fetching: false
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GroupActions.ADD_GROUP_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case GroupActions.DELETE_GROUP_SUCCESS:
      return {
        list: state.list.filter(
          (group: Group) => group.id !== action.payload.id
        ),
        fetching: false
      };
    case GroupActions.EDIT_GROUP_SUCCESS:
      return {
        list: state.list.map((group: Group) => {
          const { id } = action.payload;
          if (group.id === id) return action.payload;
          return group;
        }),
        fetching: false
      };
    case GroupActions.ADD_GROUP:
      return {
        ...state,
        fetching: true
      };
    case GroupActions.DELETE_GROUP:
      return {
        ...state,
        fetching: true
      };
    case GroupActions.EDIT_GROUP:
      return {
        ...state,
        fetching: false
      };
    case GroupActions.GET_GROUP_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case GroupActions.GET_GROUP:
      return {
        ...state,
        fetching: true
      };
    default:
      return state;
  }
};
