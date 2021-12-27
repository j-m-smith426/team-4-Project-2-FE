import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, RefreshControl, StyleSheet, View } from 'react-native';

import axios from '../../../axiosConfig'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { Auth } from 'aws-amplify';
import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native-gesture-handler';
import IPost from '../../model/Post';
import AddComment from '../../Components/Post/addComment';
import { IRootState } from '../../redux/State';
import ScreenWrapper from '../ScreenWrapper';
import Post from '../../Components/Post/Post';






let post: IPost = {
    username: '',
    userProfilePic: '',
    image: '',
    Contents: '',
    timestamp: 0,
    postID: '',
    parentID: ''
};

const CommentScreen = () =>
{
   
    const [parentPost, setParentPost] = useState<IPost>(post);
    const user = useSelector((state: IRootState) =>
    {
        return state.Login.ILogin.username;
    });
    const currentPage = useSelector((state: IRootState) =>
    {
        return  state.Page.IPageState.parentID;
    });
    const currentPost = useSelector((state: IRootState) =>
    {
        return state.Page.IPageState.postID;
    });

    let navigation = useNavigation();
    useEffect(() =>
    {
        let isMounted = true;
        isMounted && getParent();
        return () => {isMounted = false}
    }, [navigation])
    const getParent = useCallback(async () =>
    {
        post = {
            username: '',
            userProfilePic: '',
            image: '',
            Contents: '',
            timestamp: 0,
            postID: '',
            parentID: ''
        }
        //setParentPost(post);

        axios.get<any>(`Post/${currentPost.replace('#', '_')}/${currentPage.replace('#', '_')}`, {
            
        }).then(response =>
        {
            let data = response.data;
            console.log('data',data);
            let name: string = data.REFERENCE.split('#')[0];
            post.username = name;
            post.postID = data.REFERENCE;
            post.Contents = data.content;
            post.timestamp = data.Stamp;
            post.image = data.image;
            setParentPost(post);
        })
    }, [!post.userProfilePic]);
  
    //console.log('Result',postArr);
    return (
        

        <ScreenWrapper>
            {/* {console.log('Parent: ',parentPost)} */}
            <View style={styles.item}>
           

            <Post username={parentPost.username}
                userProfilePic={parentPost.userProfilePic}
                Contents={parentPost.Contents}
                image={parentPost.image}
                timestamp={parentPost.timestamp}
                postID={parentPost.postID}
                parentID={parentPost.parentID}/>
            <AddComment username={user} userProfilePic="pic" />
               
                
                </View>
            </ScreenWrapper>
                
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // width: '100%',
      alignItems: 'center',
      //justifyContent: 'space-evenly',
  
    },
    item: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        marginVertical: 8,
    }
  });

export default CommentScreen;