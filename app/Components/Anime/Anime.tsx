import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/State";
import axiosConfig from "../../../axiosConfig";
import IAnime from "../../model/Anime";
import IUser from "../../model/User";
const newAnime:IAnime = {
    REFERENCE:'0',
    TYPEID:'A#FakeAnime',
    name:'IamAFake',
    bio:'bad day for me',
    image:'',
    rating:1,
  }
const Anime = () => {

    const [clicked, setClicked] = useState(false);
    const [anime, setAnime] = useState(newAnime);
    const [currentPage, currentUser] = useSelector((state: IRootState) =>
    {
        return [state.sites.IPageState.parentID, state.sites.ILogin.username];
    })
    useEffect(() =>
    {
      let isMounted = true;
      isMounted && getAnime()
      return() => {isMounted = false}
    }, [])
    const getAnime = async () =>
    {axiosConfig.get('/Anime/'+currentPage.replace('#','_'))
      .then(response =>{setAnime(response.data)});
     
    }
    
    const handleStarClick = () =>
    {
        //console.log("Clicked");
        axiosConfig.get('User/U_' + currentUser).then((response) =>
        {
            let userData: IUser = response.data;
            let emptyArr: string[] = [];
            let newFavArr:string[] = userData.favorites;
            if (newFavArr && newFavArr.includes(anime.TYPEID + '#' + anime.image)) {
                newFavArr.forEach((item) =>
                {
                    if (item !== anime.TYPEID + '#' + anime.image) {
                        emptyArr.push(item);
                    }
                })
            } else {
            emptyArr.push(anime.TYPEID + '#' + anime.image);
            }
            userData.favorites = emptyArr;
            console.log(userData);
            axiosConfig.put('User', {
                userID: userData.TYPEID,
                REFERENCE: userData.REFERENCE,
                image: userData.image,
                bio: userData.bio,
                watchlist: userData.watchlist,
                followed: userData.followed,
                favorites: userData.favorites
            });
        })
        setClicked(!clicked);
    };

    return(
        <ScrollView contentContainerStyle = {styles.container}>
            <View style = {styles.top}>
                <Image
                    style = {styles.animePicture}
                    source={{
                        uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${anime.image}`,
                        method: 'GET',
                        cache: 'reload',
                        headers: { Pragma: 'no-cache' },
                    
                    }}
                />
            </View>
            <View style = {styles.information}>
                <View style = {styles.headInfo}>
                    <Text style={styles.title}> {anime.TYPEID.split('#')[1]}</Text>
                    
                    <TouchableOpacity onPress = {() => handleStarClick()}>
                        <AntDesign name = "star" size = {34} color = {clicked? "gold":"grey"}/>
                    </TouchableOpacity>

                </View>
                <Text style={styles.genre}>{/*anime.genra*/}</Text>
                <Text style={styles.rating}>{anime.rating}</Text>
                <Text style={styles.description}>{anime.bio}</Text>
            </View>
        
            {/* <View style = {styles.bottom}></View> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },

    top: {
        backgroundColor: "#0078FF",
        paddingVertical: "15%",       
        height: "30%",
    },

    information: {
        paddingTop: "60%",
        alignItems: "center",
    },

    headInfo: {
        flexDirection: "row",
    },

    star: {
        color: "gold",
    },

    title:{
        fontSize: 32,
        fontWeight: "bold",
        textAlign:'center',
        paddingBottom: "4%",
        paddingHorizontal: "4%",
    },

    genre: {
        backgroundColor: "#E9E9E9",
        width: "100%",
        textAlign: 'center',
        paddingVertical: "2%",
        fontSize: 16,
    },

    rating:{
        fontSize:18,
        paddingVertical: "5%",
    },

    description: {
        marginHorizontal: "12%",
        textAlign:'left',
        fontSize: 16,
    },
    
    animePicture: {
        width: 300,
        height: 400,
        resizeMode: 'stretch',
        alignSelf: "center",
        borderWidth: 5,
        borderColor: "white",
    },
});

export default Anime;