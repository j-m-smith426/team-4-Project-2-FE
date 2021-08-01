import React, {useState, useEffect} from "react";
import { ScrollView, Text, Image, View, StyleSheet, Pressable } from "react-native";
import axiosConfig from "../../../axiosConfig";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/State";
import IUser from "../../model/User";
import { updateUser } from "./updateUser";
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
    const [user, setUser] = isMounted && useState<IUser>(newUser)
    let currentUser = isMounted && useSelector((state: IRootState) =>
    {
        return state.sites.ILogin.username;
    })
    useEffect(() =>
    {
        isMounted = true;
        if (isMounted) {
            
           setVeiwingUser();
            setFollow();
        }
        return () => { isMounted = false;}
    },[])
    const setVeiwingUser = () =>
    {
        axiosConfig.get('User/U_' + currentUser).then((resp) =>
        {
            console.log(resp.data);
            setUser(resp.data)
        })
    }

    const setFollow = () =>
    {
        if (user.followed.includes(props.name + '#' + props.image)) {
            setFollowing(true);
            console.log(following);
        }
    }
   
    const addFollow = async () =>
    {
        user.followed.push(props.name+ '#' + props.image);
        console.log(user);
        updateUser(user);
        setFollowing(true);
    }

    const unFollow = async() =>
    {
        let temp:any[] = []
        user.followed.forEach((name:any) => {if(name !== props.name+ '#' + props.image){temp.push(name)}})
        user.followed = temp;
        updateUser(user);
        setFollowing(false);
    }
    const followButton = () =>
    {
        return (following ?
            <Pressable onPress={unFollow} style={styles.following}>
                <Icon name='check'/><Text>Following</Text>
            </Pressable>:
            <Pressable onPress={addFollow} style={styles.following}>
                <Text>Follow</Text>
            </Pressable> )
    }
    return(
        <View style={styles.background}>
            <Text>
                {props.name}
            </Text>
        <Image
            style = {styles.profilePicture}
            source = {{uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${props.image}`}}
            />
            {currentUser !== props.name && followButton()}
            <Text testID = 'greeting' style={styles.intro}>{props.bio.greeting}</Text>
        <View style={styles.bio}>
                <Text>Synopsis:</Text>
                <Text>{props.bio.description}</Text>
            </View>
            
    </View>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        //alignContent: 'space-around'
    },

    username: {
        paddingVertical: "4%",
        textAlign: "center",
        flex: 0.10,
        fontSize: 16,
        fontStyle: "italic",
    },

    profilePicture: {
        alignSelf: "center",
        width: 100,
        height: 100,
        paddingBottom: "25%",
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 100/2,
    },
    intro: {
        flex: 2,
        fontSize: 16,
        textAlign: "center",
        paddingTop: "5%"   
    },

    bio: {
        flex: 2,
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: "10%",
        paddingVertical: "5%"
    },
    following: {
        flexDirection: "row",
        alignSelf: 'center'
    }
});

export default Bio;