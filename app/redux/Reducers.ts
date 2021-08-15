import {
  ILoginActions,
  ISwitchPageActions,
  IUpdateAction,
  LoginActions,
  SwitchPageAction,
  UpdateInfo,
} from "./Actions/Actions";
import { IAppState, initialState } from "./State";

export const LoginReducer = (
  state: IAppState = initialState,
  action: ILoginActions
): IAppState => {
  const newState = { ...state };
  switch (action.type) {
    case LoginActions.LOGIN:
      newState.ILogin.username = action.payload.name;
      newState.ILogin.userType = action.payload.type;
      newState.ILogin.user = action.payload.user;
      return newState;
    case LoginActions.UPDATE:
      newState.ILogin.user = action.payload.user;
      return newState;
    case LoginActions.LOGOUT:
      newState.ILogin.username = initialState.ILogin.username;
      newState.IPageState.parentID = initialState.IPageState.parentID;
      newState.IPageState.postID = initialState.IPageState.postID;
      return newState;
    default:
      return newState;
  }
};

export const PageReducer = (
  state: IAppState = initialState,
  action: ISwitchPageActions
): IAppState => {
  const newState = { ...state };
  switch (action.type) {
    case SwitchPageAction.UPDATEUSER:
      newState.IPageState.UserPageName = action.payload.name;
      newState.IPageState.parentID = action.payload.parentID;
      return newState;
    case SwitchPageAction.UPDATEANIME:
      newState.IPageState.AnimePageName = action.payload.name;
      newState.IPageState.parentID = action.payload.parentID;
      return newState;
    case SwitchPageAction.VIEW_POST:
      newState.IPageState.parentID = action.payload.parentID;
      newState.IPageState.postID = action.payload.postID;
      return newState;
    default:
      return newState;
  }
};

export const UpdateInfoReducer = (
  state: IAppState = initialState,
  action: IUpdateAction
): IAppState => {
  const newState = { ...state };
  switch (action.type) {
    case UpdateInfo.UPDATE_USER:
      newState.User = action.payload.user;
      return newState;
    case UpdateInfo.UPDATE_ANIME:
      newState.Anime = action.payload.anime;
      return newState;
    default:
      return newState;
  }
};
