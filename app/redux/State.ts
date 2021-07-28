//LogIn information
export interface Ilogin {
  username: string;
  userType: string;
  //to be updated
}
//Page componets
export interface IPageState {
  PageName: string;
  parentID: string;
}

export interface IAppState {
  ILogin: Ilogin;
  IPageState: IPageState;
}

export interface IRootState {
  sites: IAppState;
}

export const initialState: IAppState = {
  ILogin: {
    username: "Guest",
    userType: "user",
  },
  IPageState: {
    PageName: "Login",
    parentID: "Guest",
  },
};
