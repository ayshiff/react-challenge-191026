export interface Group {
  id: number;
  year: number;
  cursusId: number;
}

export const GroupActions = {
  ADD_GROUP: "[GROUP] ADD_GROUP",
  EDIT_GROUP: "[GROUP] EDIT_GROUP",
  DELETE_GROUP: "[GROUP] DELETE_GROUP",
  GET_GROUP: "[GROUP] GET_GROUP",
  GET_ALL_GROUP: "[GROUP] GET_ALL_GROUP",
  ADD_GROUP_SUCCESS: "[GROUP] ADD_GROUP_SUCCESS",
  EDIT_GROUP_SUCCESS: "[GROUP] EDIT_GROUP_SUCCESS",
  DELETE_GROUP_SUCCESS: "[GROUP] DELETE_GROUP_SUCCESS",
  GET_GROUP_SUCCESS: "[GROUP] GET_GROUP_SUCCESS",
  GET_ALL_GROUP_SUCCESS: "[GROUP] GET_ALL_GROUP_SUCCESS"
};

export const AAddGroupSuccess = (
  payload: Group
): { type: string; payload: Group } => ({
  type: GroupActions.ADD_GROUP_SUCCESS,
  payload
});

export const AEditGroupSuccess = (
  payload: Group
): { type: string; payload: any } => ({
  type: GroupActions.EDIT_GROUP_SUCCESS,
  payload
});

export const ADeleteGroupSuccess = (
  payload: Group
): { type: string; payload: any } => ({
  type: GroupActions.DELETE_GROUP_SUCCESS,
  payload
});

export const AGetGroupsSuccess = (
  payload: Group
): { type: string; payload: any } => ({
  type: GroupActions.GET_GROUP_SUCCESS,
  payload
});

export const AGetAllGroupsSuccess = (
  payload: Group
): { type: string; payload: any } => ({
  type: GroupActions.GET_ALL_GROUP_SUCCESS,
  payload
});

export const AAddGroup = (
  payload: Group
): { type: string; payload: Group } => ({
  type: GroupActions.ADD_GROUP,
  payload
});

export const AEditGroup = (): { type: string } => ({
  type: GroupActions.EDIT_GROUP
});

export const ADeleteGroup = (): { type: string } => ({
  type: GroupActions.DELETE_GROUP
});

export const AGetGroups = (): { type: string } => ({
  type: GroupActions.GET_GROUP
});

export const AGetAllGroups = (): { type: string } => ({
  type: GroupActions.GET_ALL_GROUP
});
