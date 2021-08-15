import axios from "../../../axiosConfig";
import { Dispatch } from "redux";
import {
  ILoginActions,
  ISwitchPageActions,
  IUpdateAction,
  LoginActions,
  SwitchPageAction,
  UpdateInfo,
} from "./Actions";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useNavigation } from "@react-navigation/native";

export const getAnUser = (user: string) => async (
  dispatch: Dispatch<IUpdateAction>
) => {
  axios.get("User/U_" + user).then((resp) => {
    console.log("resp", resp.data);
    dispatch({
      type: UpdateInfo.UPDATE_USER,
      payload: {
        user: resp.data,
        anime: {
          REFERENCE: "0",
          TYPEID: "",
          name: "",
          bio: "",
          image: "key",
          genre: "",
        },
      },
    });
  });
};

export const logInUser = (user: CognitoUser) => async (
  loginDispatch: Dispatch<ILoginActions>,
  pageDispatch: Dispatch<ISwitchPageActions>
) => {
  axios.get("User/U_" + user.getUsername().toLowerCase()).then((resp) => {
    loginDispatch({
      type: LoginActions.LOGIN,
      payload: {
        name: user.getUsername().toLowerCase(),
        type:
          user.getUsername().toLowerCase() === "animefanatic"
            ? "Admin"
            : "user",
        user: resp.data,
      },
    });
    pageDispatch({
      type: SwitchPageAction.UPDATEUSER,
      payload: {
        name: `U#${user.getUsername().toLowerCase()}`,
        parentID: `U#${user.getUsername().toLowerCase()}`,
        postID: "",
      },
    });
  });
};

export const updateLoggedInUser = (user: string) => async (
  dispatch: Dispatch<ILoginActions>
) => {
  axios.get("User/U_" + user.split("#")[1]).then((resp) => {
    dispatch({
      type: LoginActions.LOGIN,
      payload: {
        name: "",
        type: "",
        user: resp.data,
      },
    });
  });
};
