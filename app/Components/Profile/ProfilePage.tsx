import React from "react";
import { Button } from 'react-native-elements';
import { View, StyleSheet, Text , Image, Alert, ScrollView, Pressable} from "react-native";

const ProfilePage = () => {
    return(
        //body
        <View style = {styles.container}>
            
            <View style={styles.header}>
                <View style = {styles.buttons}>
                    <Button 
                        title = "Search Bar"
                        type = "clear"
                        style = {styles.middle}
                        onPress = {() => Alert.alert('Search Bar')}
                    />
                    <Button
                        title = "Edit"
                        type = "clear"
                        style = {styles.right}
                        onPress = {() => Alert.alert('Pull Dropdown, change v to ^')}
                    />
                </View>
            </View>
            <Text style = {styles.username}>Username</Text>
            <Image
                style = {styles.profilePicture}
                source = {require('../../assets/favicon.png')}
            />

            <View style={styles.bio}>
                <ScrollView>
                    <Text style = {styles.bio}>Hi! My name is 2Chainz!</Text>
                    <Text>Synopsis:</Text>
                    <Text>I like to watch the birdz</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>
                    <Text>liwjdahdnkajdkjashdkhadjashdkjahdiewh8i-0u98ygt76ufryd5tesxdfcgvhjbkilouy7cgfhbvnmkjlhgfcvbnkjlhgbvnkjhgvb</Text>

                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Text>Home</Text>
                <Text>Post</Text>
                <Text>Watchlist</Text>
                <Text>Favorites</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: '5%',
        minHeight: "10%",
        height: "90%",
        fontSize: 20,
        flex: 1,
    },

    header: {
        flex: 0.33,
        marginTop: "12%",
        marginLeft: '-2.5%',
        marginRight: '-2.5%',
    },

    buttons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },

    middle: {
        flex: 0.5,
    },

    right: {
        flex: 0.9,
    },

    username: {
        textAlign: "center",
        flex: 0.15,
        fontSize: 16,
        fontStyle: "italic",
    },

    profilePicture: {
        alignSelf: "center",
        width: 150,
        height: 150,
        marginBottom: "15%",
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 150/2,
    },

    bio: {
        flex: 2,
        fontSize: 16,
        textAlign: "center",
        marginLeft: "5%",
        marginRight: "5%",
        paddingBottom: "3%"
    },

    footer: {
        flex: 0.1,
        marginBottom: "5%",
        marginTop: "8%",
        flexDirection: "row",
        justifyContent: "space-between",
        position: 'relative',
        zIndex: 1,
    },
});

export default ProfilePage;