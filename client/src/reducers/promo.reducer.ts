import { PromoActions, Promo } from "../actions/promo.action";

const initialState: any = {
  list: [],
  fetching: false,
  overview: []
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case PromoActions.ADD_PROMO_SUCCESS:
      return {
        list: state.list.concat(action.payload),
        fetching: false
      };
    case PromoActions.DELETE_PROMO_SUCCESS:
      return {
        list: state.list.filter(
          (promo: Promo) => promo.id !== action.payload.id
        ),
        fetching: false
      };
    case PromoActions.EDIT_PROMO_SUCCESS:
      return {
        list: state.list.map((promo: Promo) => {
          const { id } = action.payload;
          if (promo.id === id) return action.payload;
          return promo;
        }),
        fetching: false
      };
    case PromoActions.ADD_PROMO:
      return {
        ...state,
        fetching: true
      };
    case PromoActions.DELETE_PROMO:
      return {
        ...state,
        fetching: true
      };
    case PromoActions.EDIT_PROMO:
      return {
        ...state,
        fetching: false
      };
    case PromoActions.GET_PROMO_SUCCESS:
      return {
        list: state.list,
        fetching: false,
        overview: action.payload
      };
    case PromoActions.GET_ALL_PROMO_SUCCESS:
      return {
        list: action.payload,
        fetching: false
      };
    case PromoActions.GET_PROMO:
      return {
        ...state,
        fetching: true
      };
    default:
      return state;
  }
};
