import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import colors from "../../config/colors";
import IPost from "../../model/Post";


import Button_Comment from "./Button_Comment";
import Button_Like from "./Button_Like";
import ProfileImg from "./ProfileImg";







const Post = (props: IPost) =>
{
    const [hasImage, setHasImage] = useState(false);
    useEffect(() =>
    {
        setHasImage(Boolean(props.image));        
    },[])
    return (
        <View style={styles.post}>

            {/* <View style={styles.postTop}> */}
                <View style={styles.profImg}>
                    <ProfileImg username={props.username} profileImg={props.userProfilePic} />
                </View>
            {/* </View> */}
                <View style={styles.text}>
                    <Text>{props.Contents}</Text>
                </View>
            {/* <View style={styles.postMid}> */}
            {
                hasImage && <Image style={styles.postImg} source={require('../../assets/icon.png')} />
            }
            {/* </View> */}


            <View style={styles.postBot}>
                <View style={styles.postBot}>
                <Button_Comment />
                <Button_Like />
                </View>
                
                <View style={styles.timeContainer}>
                <Text>Posted {props.timestamp} Ago</Text>

                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        //flex:1,
        backgroundColor: colors.tertiary,
        borderWidth: 5,
        width: '100%',
        maxHeight: '100%'  
    },
    postTop: {
        
        flexDirection:"row",
        
        maxHeight: 500,
        
        
    },
    profImg: {
        
        flexDirection: 'row',
      
        alignSelf: 'flex-start',
        position: 'relative',
        width: '50%',
        maxWidth: 200,
        height: 50,
        marginTop: '2%',
        marginLeft:'1%'
        
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
        borderWidth: 2,
        alignSelf: 'center',
        borderColor: 'black',
        resizeMode: 'center',
        marginBottom: 5,
        
    },
    postBot: {
       
        height: 40,
        marginTop: 1,
        marginLeft: '1%',
        marginBottom: '1%'
       
        
    },
    timeContainer: {

        //flex:1,
        backgroundColor: 'red',
        borderWidth: 5,
        width: '100%',
        maxHeight: '60%'  
    },
    postTop: {
        //flex: 1,
        flexDirection:"row",
        backgroundColor: 'lightblue',
        height: 50,
        //justifyContent: 'center',
       // alignContent: 'center',
    },
    profImg: {
        //flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange',
        alignSelf: 'flex-start',
        position: 'relative',
        width: 150,
        maxWidth: 200,
        height: 50,
        
        // justifyContent: 'flex-start',
        marginLeft:'2%'
        
    },
    text: {
        //flex: 1,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignSelf: 'center',
        marginTop: 10,
        height: 70,
        justifyContent: 'center',
        position: 'relative',
    },
    postMid: {
        //flex:1,
        
        maxHeight: '70%',
        backgroundColor: 'blue',
        
    },
    postImg: {
        height: 200,
        width: '100%',
        resizeMode: 'center'
    },
    postBot: {
        //flexDirection: 'row',
        height: 40,
        backgroundColor: 'green',
        
    },
    timeContainer: {
        flexDirection: 'row-reverse',

        alignSelf: 'flex-end',
        paddingTop: 10,
        position: 'absolute',
        justifyContent: 'flex-end',

        marginRight: '10%',

    }


});

export default Post;