import React, {useState, useEffect} from "react";
import { ScrollView, Text, Image, View, StyleSheet, Pressable } from "react-native";
import axiosConfig from "../../../axiosConfig";
import axios, {AxiosResponse} from "axios";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/State";

export interface IAnime {
    TYPEID: string;
    REFERENCE: string;
    name: string;
    description:string;
    genres: string[];
    image:string;
    
}

let newAnime:IAnime = {
    TYPEID: '',
    REFERENCE: '',
    name: '',
    description:'',
    genres: [],
    image:''
}
interface Iprops
{
    image: string,
    bio: {
        greeting: string,
        description:string
    },
    following: boolean,
    user: any,
    name:string
}

const Bio = (props: Iprops) =>
{
    const [following, setFollowing] = useState(false);
    const currentUser = useSelector((state: IRootState) =>
    {
        return state.sites.ILogin.username;
    })
    console.log(props);
   /*
    const [anime, setAnime] = useState<any>(newAnime);
    useEffect((), => {
        getAnime();
    }, []);

    
    const getAnime = async () => {
        let animeResponse: any = 'null';
        axiosConfig.get('Anime/all').then(response => {
            animeResponse = response.data;
            setAnime = animeResponse;
            //alert(JSON.stringify(response.data));

        })
    } 
    
    const getAnime = async () => {
        let animeResponse: any = 'null'
        return axiosConfig.get<typeof newAnime>('Anime/A#Naruto').then(response => {
            animeResponse = response.data;
            console.log(animeResponse);

        });
    }
    getAnime();
    */
    const addFollow = async () =>
    {
        props.user.followed.push(props.name);
        axiosConfig.put('User', {
            ...props.user
        })
        setFollowing(true);
    }

    const unFollow = async() =>
    {
        let temp:any[] = []
        props.user.followed.forEach((name:any) => {if(name !== props.name){temp.push(name)}})
        props.user.followed = temp;
        axiosConfig.put('User', {
            ...props.user
        })
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
        <View style = {styles.background}>
        {console.log('compare', currentUser, props.name)}
        <Image
            style = {styles.profilePicture}
            source = {{uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${props.image}`}}
            />
            {currentUser !== props.name && followButton()}
            <Text style={styles.intro}>{props.bio.greeting}</Text>
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