import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, Image, StyleSheet, Touchable, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Rating from '../../Screen/Rating'
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/State";
import axiosConfig from "../../../axiosConfig";
import IAnime from "../../model/Anime";
import IUser from "../../model/User";
import Loading from "../../Screen/loading";
import { useNavigation } from "@react-navigation/native";
import color from '../../config/colors'
import { updateUser } from "../Profile/updateUser";
import colors from "../../config/colors";
const newAnime:IAnime = {
    REFERENCE:'0',
    TYPEID:'',
    name:'',
    bio:'',
    image:'',
    genre:'',
    rating:1,

}
let newUser: IUser = {
    REFERENCE: '0',
    TYPEID: '',
    name: '',
    bio: {
        greeting: '',
        description:''
    },
    image: 'key',
    watchlist: [],
    followed: [],
    favorites: []

}


const Anime = () => {
    let isMounted = true;
    const [clicked, setClicked] = useState(false);
    const [anime, setAnime] = isMounted && useState(newAnime);
    const [user, setUser] = isMounted && useState<IUser>(newUser)
    const [currentPage, currentUser] = isMounted && useSelector((state: IRootState) =>
    {
        return [state.sites.IPageState.parentID, state.sites.ILogin.username];
    });
    let navigation = isMounted && useNavigation();
    useEffect(() =>
    {
        isMounted = true;
        console.log('page: ',currentPage)
        
        if (isMounted) {
                getAnime()
             //set star at load needs work
        }
      return() => {isMounted = false}
    }, [navigation,currentPage, user])
    const getAnime = async () =>
    {
        
        axiosConfig.get('/Anime/' + currentPage.replace('#', '_'))
            .then(response =>
            {
                //console.log('page: ',currentPage, 'response',response.data);
                setAnime(response.data);
            });
    }
    const setVeiwingUser = () =>
    {
        axiosConfig.get('User/U_' + currentUser).then((resp) =>
        {
            console.log(resp.data);
            if (user !== resp.data) {
                setUser(resp.data)
            }
        })
    }
    const setStar = () =>
    {
        
            let userData: IUser = user;
            let newFavArr: string[] = user.favorites;
            if (newFavArr && newFavArr.includes(anime.TYPEID + '#' + anime.image)) {
                setClicked(true);
            }
        
    }
    
    const handleStarClick = () =>
    {
        //console.log("Clicked");
        
        axiosConfig.get('User/U_' + currentUser).then((response) =>
        {
            let userData: IUser = response.data;
            let emptyArr: string[] = [];
            let newFavArr: string[] = userData.favorites;
            console.log('Base arr',newFavArr)
            if (clicked) {
                    newFavArr.forEach((item) =>
                    {
                        if (item !== anime.TYPEID + '#' + anime.image) {
                            emptyArr.push(item);
                        }
                    })
                } else {
            emptyArr = ([anime.TYPEID + '#' + anime.image, ...newFavArr]);
            }
            userData.favorites = emptyArr;
            console.log(userData);
            updateUser(userData);
        })
        setClicked(!clicked);
    };
//Ensure page is loaded anime is set, star is set, user is updated
    if (anime.TYPEID === '' || clicked !== user.favorites.includes(anime.TYPEID + '#' + anime.image) || user.TYPEID === '') {
        setVeiwingUser()
        getAnime();
        if (clicked !== user.favorites.includes(anime.TYPEID + '#' + anime.image)) {
            setStar();
            
        }
        //if not show loading
        return( <View style={styles.container}>
            <Loading />
            </View>)
    }

    return  (
        <View style={styles.container}>

            <Image style={styles.bgImage} source={{uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${anime.image}`}} />
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
                    <View style= {styles.titleRow}>

                    <Text style={styles.title}> {anime.TYPEID.split('#')[1]}</Text>
                    
                    <TouchableOpacity style={styles.star} onPress = {() => handleStarClick()}>
                        <AntDesign name = "star" size = {34} color = {clicked? "gold":"grey"}/>
                    </TouchableOpacity>
                    </View>

                    <Text style={styles.genre}>{anime.genre || 'none'}</Text>
                    <View style={styles.scrollBox}>

        <ScrollView >
                <Text style={styles.description}>{anime.bio}</Text>
        </ScrollView>
                    </View>
                </View>
                <View style={styles.rating} >
                    
                <Rating/>
                </View>
               
            </View>
        
            {/* <View style = {styles.bottom}></View> */}
                    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    bgImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '50%',
        opacity: 0.3
    },
    scrollBox: {
        height: '50%',
        width: '100%'
    },

    top: {
        //backgroundColor: "#0078FF",
        paddingVertical: "5%",       
        height: "30%",
    },

    information: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        
    },

    headInfo: {
        flex: 1,
        paddingTop: '35%',
        flexDirection: "column",
        alignItems: 'center'
    },

    star: {
        color: "gold",
        paddingLeft: 10,
        paddingBottom: 10 
    },

    title:{
        fontSize: 32,
        fontWeight: "bold",
        textAlign:'center',
        paddingBottom:7,
        
    },

    genre: {
        backgroundColor: "#E9E9E9",
        width: "50%",
        textAlign: 'center',
        paddingBottom: 5,
        padding: 5,
        fontSize: 14,
    },

    rating: {
        flex: 1,        
        fontSize:16,
        
    },

    description: {
        marginHorizontal: "8%",
        textAlign:'left',
        fontSize: 15,
    },
    titleRow: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    animePicture: {
        position: 'absolute',
        top: '10%',
        left: '10%',
        right:'10%',
        bottom: '-70%',
       
        resizeMode: 'stretch',
        //alignSelf: "center",
        //borderWidth: 5,
        //borderColor: "white",
        //backgroundColor: color.background
    },
});

export default Anime;