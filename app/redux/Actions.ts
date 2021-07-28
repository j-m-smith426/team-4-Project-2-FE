export enum LoginActions {
  LOGIN = "Log In",
  LOGOUT = "Log out",
}

export enum CreatePostActions {
  CREATE = "Create Post",
  ADD = "Add Comment",
  Load = "Load Post",
}

export enum SwitchPageAction {
  UPDATE = "update page",
}

export interface ISwitchPageActions {
  type: SwitchPageAction;
  payload: { name: string; parentID: string };
}

export interface ILoginActions {
  type: LoginActions;
  payload: { name: string; type: string };
}

export interface IAppActions extends ILoginActions {}
