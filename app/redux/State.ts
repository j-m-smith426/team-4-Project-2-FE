import IAnime from "../model/Anime";
import IUser from "../model/User";

//LogIn information
export interface Ilogin {
  username: string;
  userType: string;
  user: IUser;
  //to be updated
}
//Page componets
export interface IPageState {
  UserPageName: string;
  AnimePageName: string;
  parentID: string;
  postID: string;
}

export interface IAppState {
  ILogin: Ilogin;
  IPageState: IPageState;
  User: IUser;
  Anime: IAnime;
}

export interface IRootState {
  Login: IAppState;
  Page: IAppState;
  Update: IAppState;
}

export const initialState: IAppState = {
  ILogin: {
    username: "Guest",
    userType: "user",
    user: {
      TYPEID: "",
      REFERENCE: "0",
      name: "",
      image: "",
      bio: {
        greeting: "",
        description: "",
      },
      watchlist: [],
      favorites: [],
      followed: [],
    },
  },
  IPageState: {
    UserPageName: "Login",
    AnimePageName: "",
    parentID: "Guest",
    postID: "none",
  },
  User: {
    TYPEID: "",
    REFERENCE: "0",
    name: "",
    image: "",
    bio: {
      greeting: "",
      description: "",
    },
    watchlist: [],
    favorites: [],
    followed: [],
  },
  Anime: {
    REFERENCE: "0",
    TYPEID: "",
    name: "",
    bio: "",
    image: "",
    genre: "",
  },
};
