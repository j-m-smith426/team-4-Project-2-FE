import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, StyleSheet, FlatList, Pressable } from "react-native";
import { useDispatch } from "react-redux";
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
    const [followInfo, setfollowinfo] = isMounted && useState<IUser[]>([]);
    let navigation = isMounted && useNavigation();
    let dispatch = isMounted && useDispatch();
    
    useEffect(() =>
    {
        isMounted = true;
        isMounted && getUsers();
        return () =>
        {
            isMounted = false;
        }
    }, [navigation])
    
    const getUsers = () =>
    {
        let info:any[] = [];
        props.following.forEach((name) =>
        {
            axiosConfig.get('User/U_' + name.split('#')[0]).then((response) =>
            {
                //console.log('info', response.data);
                if (!followInfo.includes(response.data)) {
                    
                    setfollowinfo([...followInfo,response.data]);
                }
            })
            
        }
            
        )
        
        
        
    }
    // if (followInfo.length !== props.following.length) {
    //     //getUsers();
    //     return (
    //         <Loading/>
    //     )
    // }
    
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
            
            data={followInfo}
            renderItem={
                ({ item }) =>
                
                (
                    
                <Pressable onPress={()=>goToUser(item.TYPEID.split('#')[1])}>
                    <View style={styles.container}>
                <Image
                    style={styles.follower}
                    source={{
                        uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${item.image}`
                    }}
                    />
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>{item.TYPEID.split('#')[1]}</Text>
                </View>
                        </View>
                    </Pressable>
                        )
                    }
                    keyExtractor={item => item.TYPEID}
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