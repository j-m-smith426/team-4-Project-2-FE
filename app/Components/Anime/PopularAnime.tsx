import React from "react";
import { View, Image, ScrollView, Text, StyleSheet } from "react-native";

const PopularAnime = () => {
    return(
        <ScrollView contentContainerStyle = {styles.container}>
            <View style = {styles.containAnime}>
                <View style = {styles.animeCard}>
                    <Image
                        style = {styles.anime}
                        source={{
                            uri: 'https://www.anime-planet.com/images/anime/covers/fate-zero-3626.jpg'
                        }}
                    />
                    <Text style = {styles.animeInfo} numberOfLines = {1}>Anything please</Text>
                    <Text style = {styles.genre} numberOfLines = {1}>Genre</Text>
                </View>
                <View style = {styles.animeCard}>
                    <Image
                        style = {styles.anime}
                        source={{
                            uri: 'https://www.anime-planet.com/images/anime/covers/fate-zero-3626.jpg'
                        }}
                    />
                    <Text style = {styles.animeInfo} numberOfLines = {1}>Anythingad;kdlasdkla jdklajdklajdlakjdadada work please</Text>
                    <Text style = {styles.genre} numberOfLines = {1}>action, adventure, humor</Text>
                </View>
            </View>

            <View style = {styles.containAnime}>
                <View style = {styles.animeCard}>
                    <Image
                        style = {styles.anime}
                        source={{
                            uri: 'https://www.anime-planet.com/images/anime/covers/fate-zero-3626.jpg'
                        }}
                    />
                    <Text style = {styles.animeInfo} numberOfLines = {1}>Anything please wodiheidohwe wedhewiohd ewiuhd iuuwhdiue wdui wuiew udhiewu hiewuh wf hiwuhweiu hrk why isn't this working</Text>
                    <Text style = {styles.genre} numberOfLines = {1}>Genre</Text>
                </View>
                <View style = {styles.animeCard}>
                    <Image
                        style = {styles.anime}
                        source={{
                            uri: 'https://www.anime-planet.com/images/anime/covers/fate-zero-3626.jpg'
                        }}
                    />
                    <Text style = {styles.animeInfo} numberOfLines = {1}>Anime Name</Text>
                    <Text style = {styles.genre} numberOfLines = {1}>action, adventure, humor</Text>
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
       
    },
    containAnime: {
        flexWrap: "wrap",
        flex: 1,
        paddingTop: "10%",
        paddingLeft: "2.8%",
        flexDirection: "row",
        
    },

    animeCard: {
        flex: 1,
       
    },
    
    anime: {
        width: 190,
        height: 290,
        resizeMode: 'contain',
        flex: 1,
    },

    animeInfo: {
        paddingHorizontal: "1%",
        fontSize: 16,
    },

    genre: {
        paddingHorizontal: "1%",
        fontSize: 14,
        color: "grey",
    }
})

export default PopularAnime;