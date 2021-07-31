import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, ScrollView, StyleSheet, FlatList, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { SwitchPageAction } from "../../redux/Actions";
interface IProps
{
    following: string[];
}
const Following = (props: IProps) =>
{
    let navigation = useNavigation();
    let dispatch = useDispatch();
    console.log(props);
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
       
            <FlatList
            data={props.following}
            renderItem={
                ({ item }) =>
                    
                (
                    <Pressable onPress={()=>goToUser(item.split('#')[0])}>

            <View style={styles.container}>
                <Image
                    style={styles.follower}
                    source={{
                        uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${item.split('#')[1]}`
                    }}
                    />
                <View style={styles.infoContainer}>
                    <Text style={styles.followerName} numberOfLines={1}>{item.split('#')[0]}</Text>
                </View>
                        </View>
                    </Pressable>
                        )
                    }
                keyExtractor={item => item.split('#')[0]}
            />
        
    )
}

const styles = StyleSheet.create({
    container: {
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
        flex: 1,
    },

    followerName: {
        fontSize: 18,
        fontStyle: "italic",
        flex: 0.5,
    },
});

export default Following;