import axiosConfig from "../../../axiosConfig";
import IUser from "../../model/User";

export const updateUser = (user: IUser) => {
  console.log(user);
  axiosConfig.put("User", {
    userID: user.TYPEID,
    REFERENCE: "0",
    image: user.image,
    bio: user.bio,
    watchlist: user.watchlist,
    followed: user.followed,
    favorites: user.favorites,
  });
};
