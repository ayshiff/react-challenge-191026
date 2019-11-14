export interface Cursus {
  cursus: string;
}

export interface Promo {
  id: number;
  name: string;
  year: number;
  cursus: Cursus;
}

export const PromoActions = {
  ADD_PROMO: "[PROMO] ADD_PROMO",
  EDIT_PROMO: "[PROMO] EDIT_PROMO",
  DELETE_PROMO: "[PROMO] DELETE_PROMO",
  GET_PROMO: "[PROMO] GET_PROMO",
  GET_ALL_PROMO: "[PROMO] GET_ALL_PROMO",
  ADD_PROMO_SUCCESS: "[PROMO] ADD_PROMO_SUCCESS",
  EDIT_PROMO_SUCCESS: "[PROMO] EDIT_PROMO_SUCCESS",
  DELETE_PROMO_SUCCESS: "[PROMO] DELETE_PROMO_SUCCESS",
  GET_PROMO_SUCCESS: "[PROMO] GET_PROMO_SUCCESS",
  GET_ALL_PROMO_SUCCESS: "[PROMO] GET_ALL_PROMO_SUCCESS",
  ADD_PROMO_FAIL: "[PROMO] ADD_PROMO_FAIL",
  EDIT_PROMO_FAIL: "[PROMO] EDIT_PROMO_FAIL",
  DELETE_PROMO_FAIL: "[PROMO] DELETE_PROMO_FAIL",
  GET_PROMO_FAIL: "[PROMO] GET_PROMO_FAIL",
  GET_ALL_PROMO_FAIL: "[PROMO] GET_ALL_PROMO_FAIL"
};

export const AAddPromoSuccess = (
  payload: Promo
): { type: string; payload: Promo } => ({
  type: PromoActions.ADD_PROMO_SUCCESS,
  payload
});

export const AEditPromoSuccess = (
  payload: Promo
): { type: string; payload: any } => ({
  type: PromoActions.EDIT_PROMO_SUCCESS,
  payload
});

export const ADeletePromoSuccess = (
  payload: Promo
): { type: string; payload: any } => ({
  type: PromoActions.DELETE_PROMO_SUCCESS,
  payload
});

export const AGetPromosSuccess = (
  payload: Promo
): { type: string; payload: any } => ({
  type: PromoActions.GET_PROMO_SUCCESS,
  payload
});

export const AGetAllPromosSuccess = (
  payload: Promo[]
): { type: string; payload: any } => ({
  type: PromoActions.GET_ALL_PROMO_SUCCESS,
  payload
});

export const AAddPromo = (
  payload: Promo
): { type: string; payload: Promo } => ({
  type: PromoActions.ADD_PROMO,
  payload
});

export const AEditPromo = (): { type: string } => ({
  type: PromoActions.EDIT_PROMO
});

export const ADeletePromo = (): { type: string } => ({
  type: PromoActions.DELETE_PROMO
});

export const AGetPromos = (): { type: string } => ({
  type: PromoActions.GET_PROMO
});

export const AGetAllPromos = (): { type: string } => ({
  type: PromoActions.GET_ALL_PROMO
});
