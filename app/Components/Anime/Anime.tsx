import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import axios from "axios";
const Anime = () => {
    const getAnime = () => {
        axios.get('https://oqz6a3fml5.execute-api.us-east-2.amazonaws.com/dev/Anime/');
    }
    return(
        <ScrollView contentContainerStyle = {styles.container}>
            <View style = {styles.top}>
                <Image
                    style = {styles.animePicture}
                    source={{
                        uri: 'https://www.anime-planet.com/images/anime/covers/fate-zero-3626.jpg'
                    }}
                />
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
        backgroundColor: "#DDA2FF",
        //flex: 3,
        paddingVertical: "20%",       
        height: "30%",
        borderBottomWidth: 3,
    },
    bottom: {
        backgroundColor: "#DDA2FF",
        flex: 0.9,
        paddingVertical: "20%",

    },
    animePicture: {
        width: 300,
        height: 400,
        resizeMode: 'stretch',
        alignSelf: "center",
        borderWidth: 5,
        borderColor: "white",
    },
    animeName: {},
    animeInfo: {},
});

export default Anime;