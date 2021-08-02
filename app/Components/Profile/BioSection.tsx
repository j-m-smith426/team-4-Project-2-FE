import React, {useState, useEffect} from "react";
import { ScrollView, Text, Image, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import axiosConfig from "../../../axiosConfig";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/State";
import IUser from "../../model/User";
import colors from '../../config/colors'
import { updateUser } from "./updateUser";
import Loading from "../../Screen/loading";
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

interface Iprops
{
    image: string,
    bio: {
        greeting: string,
        description:string
    },
   
    name:string
}

const Bio = (props: Iprops) =>
{
    let isMounted = true;
    const [following, setFollowing] = isMounted && useState(false);
    const [isloading, setIsloading] = isMounted && useState(false)
    const [user, setUser] = isMounted && useState<IUser>(newUser)
    let currentUser = isMounted && useSelector((state: IRootState) =>
    {
        return state.sites.ILogin.username;
    })
    const setFollow = () =>
    {
        console.log(user.followed.includes(props.name))
        if (user.followed.includes(props.name)) {
            setFollowing(true);
            console.log('follow',following);
        }
    }
    useEffect(() =>
    {
        isMounted = true;
        if (isMounted) {
            
            setFollow();
        }
        return () => { isMounted = false;}
    },[following])
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

    if (user.TYPEID === '' || following !== user.followed.includes(props.name)) {
        isloading || setIsloading(true)
        setVeiwingUser();
        if (following !== user.followed.includes(props.name)){
            setFollow();
            
        }
        return (
            <Loading/>
        )
    } else {
        
        !isloading || setIsloading(false);
    }
   
    const addFollow = async () =>
    {
        if (!user.followed.includes(props.name)) {
            user.followed.push(props.name);
            console.log(user);
            updateUser(user);
            setFollowing(true);
            
        }
    }

    const unFollow = async() =>
    {
        let temp:any[] = []
        user.followed.forEach((name:any) => {if(name !== props.name){temp.push(name)}})
        user.followed = temp;
        updateUser(user);
        setFollowing(false);
    }
    const followButton = () =>
    {
        return (following ?
            <TouchableOpacity onPress={unFollow} style={styles.following}>
               
                <Icon color={colors.buttonSecondary} name='check'/><Text style={styles.buttonText}>Following</Text>
               
            </TouchableOpacity>:
            <TouchableOpacity onPress={addFollow} style={styles.following}>
                <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity> )
    }
    return(
        <View style={styles.background}>
                <Image style={styles.topBG} source = {{uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${props.image}`}}>
                </Image>

                <Image
                    style = {styles.profilePicture}
                    source = {{uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${props.image}`}}
                />
            {/* <View style = {styles.info}> */}
                <Text style={styles.UserNameText}>
                    @{props.name}
                </Text>
                {currentUser !== props.name && followButton()}
                <View style={styles.bio}>
                    <Text style={styles.intro}>Welcome!</Text>
                <Text numberOfLines={1} style={styles.intro}>{props.bio.greeting}</Text>
                    <Text style = {styles.description}>About Me:</Text>
                    <Text numberOfLines={6} style = {styles.description}>{props.bio.description}</Text>
                </View>
            {/* </View> */}
    </View>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.background
        //alignContent: 'space-around'
    },
    topBG: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '30%',
        opacity: 0.3,
    },

    UserNameText: {
        paddingTop: "5%",
        fontSize: 30,
        alignSelf: 'center',
        fontStyle: "italic",
    },

    followButtonText: {
        fontSize: 16,
        color: colors.buttonSecondary
    },

    profilePicture: {
        alignSelf: "center",
        width: 150,
        height: 150,
        paddingBottom: "25%",
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 150 / 2,
        marginTop: '6%',
        marginBottom: '10%'
    },

    intro: {    
        fontSize: 22,
        textAlign: "center",
        justifyContent: 'flex-end',
        paddingVertical: "2%"   
    },

    bio: {
        flex: 2,
        fontSize: 18,
        textAlign: "center",  
        paddingHorizontal: "10%",
        paddingVertical: "5%"
    },

    description: {
        paddingTop: "4%",
        fontSize: 20,
    },

    following: {
        flexDirection: "row",
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: colors.buttonPrimary,
        borderRadius: 2000,
        padding:5
    },
    buttonText: {
        color: colors.buttonSecondary
    }
});

export default Bio;