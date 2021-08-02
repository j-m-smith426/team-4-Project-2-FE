import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, StyleSheet, FlatList, Pressable, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../../config/colors";
import { SwitchPageAction } from "../../redux/Actions";

interface IProps
{
    following: string[];
}
const Following = (props: IProps) =>
{
    let isMounted = true;
    const [loading, setLoading] = useState(false);
    const [following, setFollow] = useState(props.following);
    let navigation = isMounted && useNavigation();
    let dispatch = isMounted && useDispatch();
    
    useEffect(() =>
    {
        isMounted = true;
         setFollow(props.following)   
        return () =>
        {
            isMounted = false;
        }
    }, [navigation,following])
    

    const goToUser = (name:string) =>
    {
        console.log('going to user');
        dispatch({
            type: SwitchPageAction.UPDATE,
            payload: {
                PageName: 'User',
                parentID: `U#${name}`
            }
        })
        navigation.navigate("User");
    }
    return(
       
            <View style={styles.flatlist}>
            
        <FlatList
            
            data={props.following}
            renderItem={
                ({ item }) =>
                
                (
                    
                <TouchableOpacity onPress={()=>goToUser(item)}>
                    <View style={styles.container}>
                
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>{item}</Text>
                </View>
                        </View>
                    </TouchableOpacity>
                        )
                    }
                    keyExtractor={item => item}
                    />
        
                    </View>
                    
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        paddingHorizontal: "2%",
        paddingVertical: "1%",
        //justifyContent: "space-between"
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        
    },
    
    follower: {
        width: "22%",
        height: "100%",
        //paddingBottom: "25%",
        borderWidth: 2,
        //borderColor: "grey",
        borderRadius: 80/2,
        resizeMode: 'stretch',
    },
    
    infoContainer: {
        paddingHorizontal: "5%",
        paddingVertical: "8%",
        marginVertical: 1,
        backgroundColor: colors.tertiary,
        
        flex: 1,
    },
    flatlist: {
        flex:1,
        backgroundColor: colors.background,  
    },

    followerName: {
        fontSize: 20,
        fontStyle: "italic",
    },
});

export default Following;