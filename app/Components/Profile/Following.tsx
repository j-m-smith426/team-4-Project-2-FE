import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, StyleSheet, FlatList, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { classicNameResolver } from "typescript";
import axiosConfig from "../../../axiosConfig";
import colors from "../../config/colors";
import IUser from "../../model/User";
import { SwitchPageAction } from "../../redux/Actions";
import Loading from "../../Screen/loading";
import ScreenWrapper from "../../Screen/ScreenWrapper";
interface IProps
{
    following: string[];
}
const Following = (props: IProps) =>
{
    let isMounted = true;
    const [loading, setLoading] = useState(false);
    let navigation = isMounted && useNavigation();
    let dispatch = isMounted && useDispatch();
    
    useEffect(() =>
    {
        isMounted = true;
            
        return () =>
        {
            isMounted = false;
        }
    }, [navigation])
    

    const goToUser = (name:string) =>
    {
        console.log('going to user');
        navigation.navigate("User");
        dispatch({
            type: SwitchPageAction.UPDATE,
            payload: {
                PageName: 'User',
                parentID: `U#${name}`
            }
        })
    }
    return(
       
            <View style={styles.flatlist}>
            
        <FlatList
            
            data={props.following}
            renderItem={
                ({ item }) =>
                
                (
                    
                <Pressable onPress={()=>goToUser(item)}>
                    <View style={styles.container}>
                
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>{item}</Text>
                </View>
                        </View>
                    </Pressable>
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
        paddingHorizontal: "5%",
        paddingVertical: "2%",
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
        
        //flex: 1,
    },
    flatlist: {
    flex:1,
      backgroundColor: colors.background  
    },

    followerName: {
        fontSize: 18,
        fontStyle: "italic",
        
        //flex: 0.5,
    },
});

export default Following;