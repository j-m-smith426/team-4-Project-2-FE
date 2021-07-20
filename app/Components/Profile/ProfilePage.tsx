import React from "react";
import { Button } from 'react-native-elements';
import { View, StyleSheet, Text } from "react-native";
import Bio from "./BioSection";
import Favorites from "./Favorites";
import Watchlist from "./Watchlist";

const ProfilePage = () => {
    return(
            <View style = {styles.container}>
                
                <View style={styles.header}>
                    {/* <View style = {styles.buttons}>
                        <Button 
                            title = "Search Bar"
                            type = "clear"
                            onPress = {() => Alert.alert('Search Bar')}
                        />
                        <Button
                            title = "Edit"
                            type = "clear"
                            onPress = {() => Alert.alert('Pull Dropdown, change v to ^')}
                        />
                    </View> */}
                    <View style = {styles.tabHeader}>
                        <Text>Profile</Text>
                        <Text>Comments</Text>
                        <Text>Favorites</Text>
                        <Text>Watchlist</Text>
                    </View>
                </View>

                {/*
                    //! Below is where each tabs content will be
                */}

                <Bio />

                {/*
                    //! Probably not using a footer but I'll leave it here for now
                */}
                {/* <View style={styles.footer}>
                    <Text>Home</Text>
                    <Text>Post</Text>
                    <Text>Watchlist</Text>
                    <Text>Favorites</Text>
                </View> */}
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: "10%",
        height: "90%",
        fontSize: 20,
        flex: 1,
        marginBottom: "10%",
    },

    header: {
        flex: 0.04,
        paddingTop: "30%",
        paddingHorizontal: '5%',
        backgroundColor: "#EAEAEA",
        //borderBottomWidth: 2,
        //borderBottomColor: "grey",
    },

    tabHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    /*
    footer: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'relative',
        backgroundColor: "#EAEAEA",
        paddingTop: "6%",
        paddingBottom: "12%",
        paddingHorizontal: "5%",
       // borderTopWidth: 2,
        //borderTopColor: "grey"
    },
    */
});

export default ProfilePage;