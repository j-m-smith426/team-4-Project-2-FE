import React from "react";
import { ScrollView, Text, Image, View, StyleSheet } from "react-native";

const Bio = () => {
    return(
        <ScrollView style = {styles.background}>
        <Text style = {styles.username}>Username</Text>
        <Image
            style = {styles.profilePicture}
            source = {require('../../assets/favicon.png')}
        />

        <View style={styles.bio}>
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

    bio: {
        flex: 2,
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: "5%",
        paddingVertical: "5%"
    },
});

export default Bio;