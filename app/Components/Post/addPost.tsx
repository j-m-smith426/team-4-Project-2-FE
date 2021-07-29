import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker'
import { View, StyleSheet, Image, Platform, Pressable, Button, TextInput } from "react-native";

import colors from "../../config/colors";
import ProfileImg from "./ProfileImg";
import { Icon } from "react-native-elements";
import axiosConfig from "../../../axiosConfig";
import { useSelector } from "react-redux";
import { IRootState } from '../../redux/State'
import { Storage } from 'aws-amplify'
import mime from 'mime-types'


interface IaddPost
{
    username: string,
    userProfilePic: string,
}



const AddPost = (props: IaddPost) =>
{
    const [image, setImage] = useState('key');
    const [content, setContent] = useState('');
    const [profilepic, setProfilePic] = useState('key');
    const currentUser = useSelector((state: IRootState) =>
    {
        return state.sites.ILogin.username;
    })
    let page: string = useSelector((state: IRootState) =>
    {
        return state.sites.IPageState.parentID;
    });
    useEffect(() =>
    {
        let isMounted = true;
        if (isMounted) {
            
            (async () => {
                if (Platform.OS !== 'web') {
                    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    if (status !== 'granted') {
                        alert('Sorry, we need camera roll permissions to make this work!');
                    }
                }
            })();
            getProfPic();
        }
        return() => {isMounted = false}
      }, []);

      const pickImage = async () => {
        let result:any = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          //aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        } else {
            setImage('key');
        }
    };
    const getProfPic = () =>
    {
        
        axiosConfig.get<any>(`User/U_${props.username}`, {
        }).then(userResponse =>
            {
            let userData = userResponse.data;
            console.log('ProfileIMG: ', userData.image);
                setProfilePic(userData.image);
            })
        }

    const submitPost = () =>
    {
        let user = currentUser;
        let Stamp: number = new Date().getTime();
            console.log('IMG',image);
            fetch(image).then((response) =>
            {
               
                console.log('Res',response);
                const access = { level: "public" };
                response.blob().then(blob =>
                    {
                        Storage.put(`${currentUser}/${Stamp}.jpg`, blob, access);
                        
                    })
                })
            
        axiosConfig.post('Post', {
                Stamp,
                postID: `${user}#${Stamp}`,
                content,
                parentID: page,
                image: image ? `${currentUser}/${Stamp}.jpg`: 'key'
        })
        setContent('');
        setImage('key');
    }
    return (
        <View style={styles.post}>

            
                <View style={styles.profImg}>
                    <ProfileImg username={props.username} profileImg={profilepic} />
                </View>
            
                <View style={styles.text}>
                <TextInput placeholder="Make a new Post" onChangeText={setContent} value={content}/>
                </View>
            {
                image !== 'key' && <Image testID='CommentImg' style={styles.postImg} source={{ uri: image }} />
            }
            
            <View style={styles.postBot}>
                <View style={styles.imgAdd}>
                    <Pressable onPress={pickImage}>
                        <Icon name="image" />
                    </Pressable>
                </View>
                
                <View style={styles.timeContainer}>
                    <Button title="Post" onPress={submitPost} />
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
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: 'black',
        resizeMode: 'center',
        marginBottom: 5,
        
    },
    postBot: {
       
        height: 40,
        marginTop: 1,
        marginLeft: '1%',
        marginBottom: '1%',
        
       
        
    },
    imgAdd: {
        alignSelf: 'flex-start',
        paddingLeft: '4%',
      paddingTop: '4%'
    },
    timeContainer: {
        alignSelf: 'flex-end',
        paddingTop: 10,
        position: 'absolute',
        justifyContent: 'flex-end',
        marginRight: '10%',
        
    }


});

export default AddPost;