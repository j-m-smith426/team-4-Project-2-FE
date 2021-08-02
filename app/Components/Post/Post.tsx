import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import axiosConfig from "../../../axiosConfig";

import colors from "../../config/colors";
import IPost from "../../model/Post";
import { SwitchPageAction } from "../../redux/Actions";
import Button_Comment from "./Button_Comment";
import Button_Like from "./Button_Like";
import ProfileImg from "./ProfileImg";


function timeDifference(oldTime:number){
    let currentTime = new Date();
    let differenceTimeMill  = currentTime.getTime()- oldTime;
    let differenceTimeSeconds = Math.floor(differenceTimeMill/(1000));
    let differenceTimeMin = Math.floor(differenceTimeSeconds / 60);
    let differentTimeHour = Math.floor(differenceTimeMin / 60);
    let differenceDays = Math.floor(differentTimeHour/24)
    if(differenceTimeMin < 1){
        return `posted ${differenceTimeSeconds} seconds ago `
    }
    if(differentTimeHour < 1){
        return `posted ${differenceTimeMin} Minutes ago `
    }
    
    if(differentTimeHour < 24){
        return `posted ${differentTimeHour} hours ago `
    }
    return `posted ${differenceDays} days ago `

}



const Post = (props: IPost) =>
{
    const [hasImage, setHasImage] = useState(false);
    const dispatch = useDispatch();
    const [profilepic, setProfilePic] = useState('key');
    const navigation = useNavigation();
    useEffect(() =>
    {
        let isMounted = true;
        if (isMounted) {
            
            setHasImage(props.image !== 'key');
            getProfPic();
        }
        return() => {isMounted = false}
    }, [navigation]);

    const getProfPic = useCallback(async() =>
    {
        
        axiosConfig.get<any>(`User/U_${props.username}`, {
        }).then(userResponse =>
            {
            let userData = userResponse.data;
            //Profile Pic
                setProfilePic(userData.image);
            })
        },[])

    const goToComment = async() =>
    {
        let id = props.postID;
        dispatch({
            type: SwitchPageAction.VIEW_POST,
            payload: {
                parentID: props.parentID,
                postID: id,
            }
        });
        navigation.navigate('Comment');
    }
    const goToUser = () =>
    {
        console.log('going to user');
        navigation.navigate("User");
        dispatch({
            type: SwitchPageAction.UPDATE,
            payload: {
                PageName: 'User',
                parentID: `U#${props.username}`
            }
        })
    }
    
    return (
        
        <View style={styles.post}>

            <Pressable onPress={() => goToUser()}>
                
                <View style={styles.profImg}>
                    <ProfileImg username={props.username} profileImg={profilepic} />
                </View>
            </Pressable>
                <View style={styles.text}>
                    <Text>{props.Contents}</Text>
            </View>
            
            { 
                hasImage && <Image testID='CommentImg' style={styles.postImg} source={{
                    uri: `https://scouter-revature-project1.s3.amazonaws.com/public/${props.image}`,
                    method: 'GET',
                    cache: 'reload',
                    headers: {Pragma: 'no-cache'},
                    
                }} />
            }
            
            <View style={styles.postBot}>
                <View style={styles.postBot}>
                    <TouchableOpacity onPress= {goToComment}>
                        <Button_Comment />
                    </TouchableOpacity>
                </View>
                
                <View style={styles.timeContainer}>
                    <Text>{ timeDifference(props.timestamp)}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        
        backgroundColor: colors.tertiary,
        borderWidth: 1,
        alignSelf: 'center',
        width: '90%',
        maxHeight: '100%',
        borderRadius: 25
    },
    postTop: {
        
        flexDirection:"row",
        
        maxHeight: 500,
        
        
    },
    profImg: {
        
        flexDirection: 'row',
      
        alignSelf: 'flex-start',
        position: 'relative',
        width: '40%',
        maxWidth: 180,
        height: 50,
        marginTop: '2%',
        marginLeft: '1%',
        //backgroundColor: colors.background
        
    },
    text: {
       
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        maxHeight: 70,
        marginHorizontal: '2%',
        marginBottom: 10,
        justifyContent: 'center',
        position: 'relative',
    },
    postImg: {
        height: 200,
        width: '80%',
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: 'black',
        //resizeMode: 'center',
        marginBottom: 5,
        
    },
    postBot: {
       
        height: 30,
        marginTop: 2,
        marginLeft: '2%',
        marginBottom: '1%',
        justifyContent: 'center'
       
        
    },
    timeContainer: {
        alignSelf: 'flex-end',
        height: 30,
        position: 'absolute',
        justifyContent: 'center',
        marginBottom: '3%',
        marginRight: '10%',
        
        
    }


});

export default Post;