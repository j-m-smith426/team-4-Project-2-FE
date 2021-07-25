import React, { useState } from "react";
import { ScrollView, Text, Image, View, StyleSheet, TextInput, Button } from "react-native";
const Bio = () => {
    return(
        <ScrollView style = {styles.background}>
            <Text style={styles.username}>Username</Text>
           
        <Image
            style = {styles.profilePicture}
            source = {require('../../assets/favicon.png')}
        />
        <Text style = {styles.intro}>Hi! My name is 2Chainz!</Text>
        <View style={styles.bio}>
                <Text>Synopsis:</Text>
                <Text>I like to watch the birdz</Text>
                
                
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