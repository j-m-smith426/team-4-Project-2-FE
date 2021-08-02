import { useNavigation } from "@react-navigation/native";
import { googleSignInButton } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, FlatList, View, Image, Pressable, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../../config/colors";
import color from "../../config/colors";
import { SwitchPageAction } from "../../redux/Actions";
interface Iprops{
    list:string[]
}
const Favorites = (props: Iprops) =>
{
    let isMounted = true;
    const [favArr, setFavArr] = isMounted && useState<any[]>(props.list || []);
    const navigation = isMounted && useNavigation();
    const dispatch = isMounted && useDispatch();
    useEffect(() =>
    {
        isMounted = true;
        console.log(props.list);
        isMounted && setFavArr(props.list)
        return() => {isMounted = false}
    }, [])

    
    const goTo = (name:string) => {
        
            console.log(name);
          dispatch({
            type: SwitchPageAction.UPDATE,
            payload: {
              name: 'Anime',
              parentID: 'A#'+name
            }
          });
          navigation.navigate('Anime')
    }
    return (
        <View style={styles.watchlist}>

        <FlatList
            data={favArr}
            renderItem={
                ({ item }) =>
                    
                (
                    <TouchableOpacity onPress={() => goTo(item.split('#')[1])}>

                        <View style={styles.anime}>
                            {item.split('#')[2] !== 'key' && <Image
                                style={styles.photo}
                                source={{
                                    uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${item.split('#')[2]}`
                                }}
                            />}
                            
                            <View style={styles.infoText}>
                            <View style={styles.infoContainer}>
                                <Text style={styles.animeTitle} numberOfLines={1}>{item.split('#')[1]}</Text>
                           
                            </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    )
                }
                keyExtractor={item => item.split('#')[1]}
                >
             </FlatList>
            </View>
    )
}


const styles = StyleSheet.create({
    watchlist: {
        flex: 1,
        backgroundColor: colors.background
    },
    anime: {
        flex:1,
        flexDirection: "row",
        paddingHorizontal: "1%",
        paddingVertical: "1%",
        //justifyContent: "space-between"
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        justifyContent: 'center',
        backgroundColor: colors.background
        
    },
    photo: {
        width: '30%',
        height: '100%',
        //marginLeft:1,
        resizeMode: 'stretch',
        
        //paddingHorizontal: "5%",
    },
    infoContainer: {
        paddingHorizontal: "5%",
        paddingVertical: "7%",
        flex: 1,
        backgroundColor: color.tertiary,
        justifyContent: 'center'
    }, 

    animeTitle: {
        fontSize: 22,
        fontStyle: "italic",
        fontWeight: "bold",
        paddingVertical: "5%",
        
        //flex: 0.4,
        //! for font-family may have to install a dependency
        //fontFamily: "sans-serif",
    },

    infoText: {
        flex: 1
    },

});

export default Favorites;