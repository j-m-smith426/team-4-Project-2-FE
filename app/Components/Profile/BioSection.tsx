import React, {useState, useEffect} from "react";
import { ScrollView, Text, Image, View, StyleSheet } from "react-native";
import axiosConfig from "../../../axiosConfig";
import axios, {AxiosResponse} from "axios";

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
interface Iprops {
    bio: {
        greeting: string,
        description:string
}
}

const Bio = (props:Iprops) => {
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
    return(
        <ScrollView style = {styles.background}>
        {/* <Text style = {styles.username}>Username</Text> */}
        <Image
            style = {styles.profilePicture}
            source = {require('../../assets/favicon.png')}
        />
            <Text style={styles.intro}>{props.bio.greeting}</Text>
        <View style={styles.bio}>
                <Text>Synopsis:</Text>
                <Text>{props.bio.description}</Text>
        </View>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
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
});

export default Bio;