import {
  ILoginActions,
  ISwitchPageActions,
  LoginActions,
  SwitchPageAction,
} from "./Actions";
import { IAppState, initialState } from "./State";

export const Reducer = (
  state: IAppState = initialState,
  action: ILoginActions | ISwitchPageActions
): IAppState => {
  const newState = { ...state };
  switch (action.type) {
    case LoginActions.LOGIN:
      newState.ILogin.username = action.payload.name;
      newState.ILogin.userType = action.payload.type;
      return newState;
    case LoginActions.LOGOUT:
      newState.ILogin.username = "Guest";
      return newState;
    case SwitchPageAction.UPDATE:
      newState.IPageState.PageName = action.payload.name;
      newState.IPageState.parentID = action.payload.parentID;
      return newState;
    default:
      return newState;
  }
};
