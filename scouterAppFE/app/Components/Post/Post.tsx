import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import colors from "../../config/colors";
import Button_Comment from "./Button_Comment";
import Button_Like from "./Button_Like";
import ProfileImg from "./ProfileImg";

const Post = () => {
    return (
        <View style={styles.post}>

            <View style={styles.postTop}>
                <View style={styles.profImg}>
                    <ProfileImg />
                </View>
            </View>
                <View style={styles.text}>
                    <Text>This is text in a content, who knows what's here or isn't here</Text>
                </View>
            {/* <View style={styles.postMid}> */}
                <Image style={styles.postImg} source={require('../../assets/icon.png')} />
            {/* </View> */}
            <View style={styles.postBot}>
                <View style={styles.postBot}>
                <Button_Comment />
                <Button_Like />
                </View>
                
                <View style={styles.timeContainer}>
                    <Text>Posted Ages Ago</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        //flex:1,
        backgroundColor: colors.terchiary,
        borderWidth: 5,
        width: '100%',
        maxHeight: '60%'  
    },
    postTop: {
        //flex: 1,
        flexDirection:"row",
        //backgroundColor: 'lightblue',
        height: 50,
        //justifyContent: 'center',
       // alignContent: 'center',
    },
    profImg: {
        //flex: 1,
        flexDirection: 'row',
       // backgroundColor: 'orange',
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
       // backgroundColor: 'yellow',
        alignSelf: 'center',
        marginTop: 10,
        height: 70,
        justifyContent: 'center',
        position: 'relative',
    },
    postMid: {
        
        maxHeight: '70%',
        borderWidth:1,
       // backgroundColor: 'blue',
        
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
        //flexDirection: 'row',
        height: 40,
       // backgroundColor: 'green',
        
    },
    timeContainer: {
        flexDirection: 'row-reverse',
        alignSelf: 'flex-end',
        paddingTop: 10,
        position: 'absolute',
        justifyContent: 'flex-end',
        
    }


});

export default Post;