import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Rating from '../../Screen/Rating'
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
        console.log("Clicked");
        axiosConfig.get('User/' + currentUser).then((response) =>
        {
            let userData: IUser = response.data;
            let emptyArr: string[] = [];
            let newFavArr:string[] = userData.favorites;
            if (newFavArr.includes(anime.TYPEID + '#' + anime.image)) {
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
            axiosConfig.put('User', userData);
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
                <Text style = {styles.genre}>Adventure, Action</Text> 
              
                <Rating/>
               
                <Text style={styles.description}>The epic episodic adventure of Goku and the Z Warriors as they defend the Earth 
                and the Universe from super-powered fighters and monsters.</Text>
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
        padding:"50%",
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
        padding:10,
        
    },

    genre: {
        backgroundColor: "#E9E9E9",
        width: "50%",
        textAlign: 'center',
        padding: 5,
        fontSize: 14,
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
        width: 250,
        height: 300,
        resizeMode: 'stretch',
        alignSelf: "center",
        borderWidth: 5,
        borderColor: "white",
    },
});

export default Anime;