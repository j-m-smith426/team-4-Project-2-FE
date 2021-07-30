import React, { useEffect, useState } from "react";
import { Text, StyleSheet, FlatList, View, Image } from "react-native";
interface Iprops{
    list:string[]
}
const Favorites = (props:Iprops) => {
    const [favArr, setFavArr] = useState<any[]>([]);
    useEffect(() =>
    {
        let isMounted = true;
        isMounted && setFavArr(props.list)
        return() => {isMounted = false}
},[])
    return(
        <FlatList
            data={favArr}
            renderItem={
                ({ item }) => (
                    <View style={styles.anime}>
                        <Image
                            style={styles.photo}
                            source={{
                                uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${item.image}`
                            }}
                        />
                        <View style={styles.infoContainer}>
                            <Text style={styles.animeTitle} numberOfLines={1}>{item.name}</Text>
                        </View>
                    </View>
                )}
            keyExtractor={item => item.name}
        >
             </FlatList>
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

export default Favorites;