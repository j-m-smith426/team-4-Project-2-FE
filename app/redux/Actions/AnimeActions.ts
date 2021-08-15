import axios from "../../../axiosConfig";
import { Dispatch } from "redux";
import { IUpdateAction, UpdateInfo } from "./Actions";
import IAnime from "../../model/Anime";

export const getAnAnime = (currentPage: string) => async (
  dispatch: Dispatch<IUpdateAction>
) => {
  axios.get("/Anime/A_" + currentPage.split("#")[1]).then((response) => {
    dispatch({
      type: UpdateInfo.UPDATE_ANIME,
      payload: {
        user: {
          TYPEID: "",
          REFERENCE: "0",
          name: "",
          image: "key",
          bio: {
            greeting: "",
            description: "",
          },
          watchlist: [],
          favorites: [],
          followed: [],
        },
        anime: response.data,
      },
    });
  });
};
