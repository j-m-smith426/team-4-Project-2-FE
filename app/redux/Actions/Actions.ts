import IAnime from "../../model/Anime";
import IUser from "../../model/User";

export enum LoginActions {
  LOGIN = "Log In",
  UPDATE = "Update Logged In User",
  LOGOUT = "Log out",
}

export enum CreatePostActions {
  CREATE = "Create Post",
  ADD = "Add Comment",
  Load = "Load Post",
}

export enum SwitchPageAction {
  UPDATEUSER = "update user page",
  UPDATEANIME = "update anime page",
  VIEW_POST = "view post",
}
export enum UpdateInfo {
  UPDATE_USER,
  UPDATE_ANIME,
}

export interface ISwitchPageActions {
  type: SwitchPageAction;
  payload: {
    name: string;
    parentID: string;
    postID: string;
  };
}

export interface ILoginActions {
  type: LoginActions;
  payload: {
    name: string;
    type: string;
    user: IUser;
  };
}
export interface IUpdateAction {
  type: UpdateInfo;
  payload: {
    user: IUser;
    anime: IAnime;
  };
}

export interface IAppActions extends ILoginActions {}
