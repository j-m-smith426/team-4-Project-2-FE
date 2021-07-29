import React, {useState} from "react";
import { View, Text, ScrollView, Image, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Anime = () => {

    const [clicked, setClicked] = useState(false);
    const handleStarClick = () => {
        console.log("Clicked");
        setClicked(!clicked);
    };

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
            <View style = {styles.information}>
                <View style = {styles.headInfo}>
                    <Text style={styles.title}> Dragonball Z</Text>
                    
                    <TouchableOpacity onPress = {() => handleStarClick()}>
                        <AntDesign name = "star" size = {34} color = {clicked? "gold":"grey"}/>
                    </TouchableOpacity>

                </View>
                <Text style = {styles.genre}>Adventure, Action</Text> 
                <Text style={styles.rating}>Rated 6 out of 7 Dragonballs</Text>
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