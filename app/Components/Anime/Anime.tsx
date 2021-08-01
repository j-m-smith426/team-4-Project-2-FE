import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";
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
    TYPEID:'A#FakeAnime',
    name:'IamAFake',
    bio:'bad day for me',
    image:'',
    genre:'',
    rating:1,
  }
const Anime = () => {
    let isMounted = true;
    const [clicked, setClicked] = useState(false);
    const [anime, setAnime] = isMounted && useState(newAnime);
    
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
    }, [navigation,currentPage])
    const getAnime = async () =>
    {
        
        axiosConfig.get('/Anime/' + currentPage.replace('#', '_'))
            .then(response =>
            {
                console.log('page: ',currentPage, 'response',response.data);
                setAnime(response.data);
            });
    }
    const setStar = () =>
    {
        axiosConfig.get('User/U_' + currentUser).then((response) =>
        {
            let userData: IUser = response.data;
            let newFavArr: string[] = userData.favorites;
            console.log(newFavArr);
            if (newFavArr && newFavArr.includes(anime.TYPEID + '#' + anime.image)) {
                setClicked(true);
            }
        })
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
            updateUser(userData);
        })
        setClicked(!clicked);
    };

    if (anime.name === 'IamAFake') {
        setStar();
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
                <View >
                    
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
        paddingBottom:10,
        
    },

    genre: {
        backgroundColor: "#E9E9E9",
        width: "50%",
        textAlign: 'center',
        paddingBottom: 10,
        padding: 5,
        fontSize: 14,
    },

    rating: {
       // flex: 1,
        flexDirection: 'row',
        fontSize:18,
        paddingVertical: "5%",
    },

    description: {
        marginHorizontal: "8%",
        textAlign:'left',
        fontSize: 16,
    },
    titleRow: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    animePicture: {
        width: 250,
        height: 300,
        resizeMode: 'stretch',
        alignSelf: "center",
        borderWidth: 5,
        borderColor: "white",
        //backgroundColor: color.background
    },
});

export default Anime;