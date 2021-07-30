import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import Post from '../Components/Post/Post';
import IPost from '../model/Post';
import AddPost from '../Components/Post/addPost';
import ScreenWrapper from './ScreenWrapper';
import axios from '../../axiosConfig'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { Auth } from 'aws-amplify';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/State';
import axiosConfig from '../../axiosConfig';
import { useNavigation } from '@react-navigation/native';
import AddComment from '../Components/Post/addComment';




// const postArr: IPost[] = [
//     {
//         username:'user1', userProfilePic:'yes', Contents:'There once was a little bunny that ran around', timestamp: 5, postID:'001'
//     },
//     {
//        username:'user2', userProfilePic:'yes', Contents:'He was very cute', image:'yes', timestamp:5, postID:'002',
//     },
//     {
//        username:'user3', userProfilePic:'yes', Contents:'He was very cute', image:'yes', timestamp:5, postID:'003',
//     }
// ]
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
    const [user, currentPage, currentPost] = useSelector((state: IRootState) =>
    {
        return [state.sites.ILogin.username, state.sites.IPageState.parentID, state.sites.IPageState.postID];
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
            {console.log('Parent: ',parentPost)}
            <View style={styles.container}>

            <Post username={parentPost.username}
                userProfilePic={parentPost.userProfilePic}
                Contents={parentPost.Contents}
                image={parentPost.image}
                timestamp={parentPost.timestamp}
                postID={parentPost.postID}
                parentID={parentPost.parentID }/>
            <AddComment username={user} userProfilePic="pic" />
                </View>
            </ScreenWrapper>
)}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
  
    },
    item: {
        marginVertical: 8,
    }
  });

export default CommentScreen;