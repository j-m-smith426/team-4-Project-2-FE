import React from "react";
import { Text, StyleSheet, Image, View, ScrollView } from "react-native";

const Watchlist = () => {
    return(
        <ScrollView>
            {/*//! Should make the entire anime card and it's info one big link to its anime page> */}
            <View style = {styles.anime}>
                <Image
                    style = {styles.photo}
                    source={{
                        uri: 'https://m.media-amazon.com/images/I/91-W7KxXXdL._SY445_.jpg'
                    }}
                />
                <View style = {styles.infoContainer}>
                    <Text style = {styles.animeTitle}>Zatch Bell</Text>
                    <Text style = {styles.infoText}>Genre: Action, Adventure</Text>
                    <Text style = {styles.infoText}>Episodes: 150</Text>
                </View>
            </View>
            <View style = {styles.anime}>
                <Image
                    style = {styles.photo}
                    source={{
                        uri: 'https://m.media-amazon.com/images/M/MV5BYjY4MDU2YjMtNzY1MC00ODg1LWIwMzYtMWE5YTA3YTI4ZjMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
                    }}
                />
                <View style = {styles.infoContainer}>
                    <Text style = {styles.animeTitle}>Sword Art Online</Text>
                    <Text style = {styles.infoText}>Genre: Action, Adventure, Romance</Text>
                    <Text style = {styles.infoText}>Episodes: 24</Text>
                </View>
            </View><View style = {styles.anime}>
                <Image
                    style = {styles.photo}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Pokemonseason6DVDvol1.jpg/225px-Pokemonseason6DVDvol1.jpg'
                    }}
                />
                <View style = {styles.infoContainer}>
                    <Text style = {styles.animeTitle}>Pokemon Advanced</Text>
                    <Text style = {styles.infoText}>Genre: Adventure</Text>
                    <Text style = {styles.infoText}>Episodes: 55</Text>
                </View>
            </View><View style = {styles.anime}>
                <Image
                    style = {styles.photo}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png'
                    }}
                />
                <View style = {styles.infoContainer}>
                    <Text style = {styles.animeTitle}>Bleach</Text>
                    <Text style = {styles.infoText}>Genre: Action, Supernatural</Text>
                    <Text style = {styles.infoText}>Episodes: 350</Text>
                </View>
            </View><View style = {styles.anime}>
                <Image
                    style = {styles.photo}
                    source={{
                        uri: 'https://img1.ak.crunchyroll.com/i/spire2/54c15675670ba44c1f98c3e11ba0cddf1515030877_full.jpg'
                    }}
                />
                <View style = {styles.infoContainer}>
                    <Text style = {styles.animeTitle}>Gintama</Text>
                    <Text style = {styles.infoText}>Genre: Comedy, Action</Text>
                    <Text style = {styles.infoText}>Episodes: 327</Text>
                </View>
            </View><View style = {styles.anime}>
                <Image
                    style = {styles.photo}
                    source={{
                        uri: 'https://m.media-amazon.com/images/M/MV5BOGZmYjkxMDItNmQ3ZC00YzdlLThjMDktYWJkOGZiOWU1NmY0XkEyXkFqcGdeQXVyMTA3MzQ4MTcw._V1_.jpg'
                    }}
                />
                <View style = {styles.infoContainer}>
                    <Text style = {styles.animeTitle}>Demon Slayer</Text>
                    <Text style = {styles.infoText}>Genre: Supernatural, Actione</Text>
                    <Text style = {styles.infoText}>Episodes: 26</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    watchlist: {},
    anime: {
        flexDirection: "row",
        //paddingHorizontal: "5%",
        //paddingVertical: "2%",
        //justifyContent: "space-between"
        borderBottomWidth: 1,
        borderBottomColor: "grey",
    },
    photo: {
        width: 100,
        height: 150,
        resizeMode: 'stretch',
        //paddingHorizontal: "5%",
    },
    infoContainer: {
        paddingHorizontal: "5%",
        paddingVertical: "5%",
        flex: 1,
    }, 

    animeTitle: {
        fontSize: 22,
        fontStyle: "italic",
        fontWeight: "bold",
        paddingBottom: "10%",
        flex: 0.4,
        //! for font-family may have to install a dependency
        //fontFamily: "sans-serif",
    },

    infoText: {
        fontSize: 16,
        flex: 0.4
    },

});

export default Watchlist;