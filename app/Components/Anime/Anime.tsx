import React, { useEffect, useState } from "react";
import {  View,  Text,  ScrollView,  Image,  StyleSheet,  TouchableOpacity,} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Rating from "../../Screen/Rating";
import { useDispatch, useSelector } from "react-redux";
import { IAppState, IRootState } from "../../redux/State";
import axiosConfig from "../../../axiosConfig";
import IAnime from "../../model/Anime";
import IUser from "../../model/User";
import Loading from "../../Screen/loading";
import { useNavigation } from "@react-navigation/native";
import { updateUser } from "../Profile/updateUser";
import colors from "../../config/colors";
import { getAnAnime } from "../../redux/Actions/AnimeActions";
import { getAnUser, updateLoggedInUser } from "../../redux/Actions/UsersActions";

const newAnime: IAnime = {
  REFERENCE: "0",
  TYPEID: "",
  name: "",
  bio: "",
  image: "",
  genre: "",
  rating: 1,
};
let newUser: IUser = {
  REFERENCE: "0",
  TYPEID: "",
  name: "",
  bio: {
    greeting: "",
    description: "",
  },
  image: "key",
  watchlist: [],
  followed: [],
  favorites: [],
};

const Anime = () => {
  let isMounted = true;
  const [clicked, setClicked] = useState(false);
  const anime = isMounted && useSelector((state: IRootState) => state.Update.Anime);
  const dispatch = useDispatch();
  const currentPage =
    isMounted &&
    useSelector((state: IRootState) => {
      return state.Page.IPageState.AnimePageName;
    });
    const  currentUser =
    isMounted &&
    useSelector((state: IRootState) => {
      return  state.Login.ILogin.user
    });
    let navigation = isMounted && useNavigation();
    useEffect(() =>
    {
        isMounted = true;
        console.log('page: ',currentPage)
        
        if (isMounted) {
          dispatch(getAnAnime(currentPage))
             //set star at load needs work
        }
      return() => {isMounted = false}
    }, [navigation]);
  
  const setStar = () => {
    let newFavArr: string[] = currentUser.favorites;
    if (newFavArr && newFavArr.includes(anime.TYPEID + "#" + anime.image)) {
      setClicked(true);
    }
  };

  const handleStarClick = () => {   
    
      let userData: IUser = currentUser;
      let emptyArr: string[] = [];
      let newFavArr: string[] = userData.favorites;
      if (clicked) {
        newFavArr.forEach((item) => {
          if (item !== anime.TYPEID + "#" + anime.image) {
            emptyArr.push(item);
          }
        });
      } else {
        emptyArr = [anime.TYPEID + "#" + anime.image, ...newFavArr];
      }
      emptyArr.sort();
      userData.favorites = emptyArr;
      console.log(userData);
    updateUser(userData);
    dispatch(updateLoggedInUser(currentUser.TYPEID))
    setClicked(!clicked);
  };
  //Ensure page is loaded anime is set, star is set, user is updated
  if (
    anime.TYPEID === "" ||
    clicked !== currentUser.favorites.includes(anime.TYPEID + "#" + anime.image) ||
    currentUser.TYPEID === ""
  ) {
    
      if (clicked !== currentUser.favorites.includes(anime.TYPEID + "#" + anime.image)) {
          
      setStar();
    }
    //if not show loading
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={{
          uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${anime.image}`,
        }}
      />
      <View style={styles.top}>
        <Image
          style={styles.animePicture}
          source={{
            uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${anime.image}`,
            method: "GET",
            cache: "reload",
            headers: { Pragma: "no-cache" },
          }}
        />
      </View>
      <View style={styles.information}>
        <View style={styles.headInfo}>
          <View style={styles.titleRow}>
            <Text style={styles.title}> {anime.TYPEID.split("#")[1]}</Text>
            <TouchableOpacity
              style={styles.star}
              onPress={() => handleStarClick()}
            >
              <AntDesign
                name="star"
                size={34}
                color={clicked ? "gold" : "grey"}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.genre}>{anime.genre || "none"}</Text>
          <View style={styles.scrollBox}>
            <ScrollView>
              <Text style={styles.description}>{anime.bio}</Text>
            </ScrollView>
          </View>
        </View>
        <View style={styles.rating}>
          <Rating page={currentPage}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "50%",
    opacity: 0.3,
  },
  scrollBox: {
    height: "50%",
    width: "100%",
  },

  top: {
    paddingVertical: "5%",
    height: "30%",
  },

  information: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  headInfo: {
    flex: 1,
    paddingTop: "35%",
    flexDirection: "column",
    alignItems: "center",
  },

  star: {
    color: "gold",
    paddingLeft: 10,
    paddingBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 7,
  },

  genre: {
    backgroundColor:colors.background2,
    width: "50%",
    textAlign: "center",   
    padding: 5,
    fontSize: 14,
  },
  rating: {
    paddingTop: "5%",
    flex: 1,
    fontSize: 16,
  },
  description: {
    marginHorizontal: "8%",
    textAlign: "left",
    fontSize: 15,
  },
  titleRow: {
    paddingVertical: "4%",    
    flexDirection: "row",
    alignItems: "center",
  },

  animePicture: {
    position: "absolute",
    top: "10%",
    left: "10%",
    right: "10%",
    bottom: "-70%",
    resizeMode: "stretch",   
  },
});

export default Anime;
