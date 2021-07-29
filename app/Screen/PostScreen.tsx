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
import LoadPosts from './LoadPosts';




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


const PostScreen = () =>
{
    
    const [user,currentPage] = useSelector((state: IRootState) =>
    {
        return [state.sites.ILogin.username, state.sites.IPageState.parentID];
    });
    let navigation = useNavigation();
    
    //console.log('Result',postArr);
    return (
        <ScreenWrapper>
            <View style={styles.item}>

            <AddPost username={user} userProfilePic="pic"/>
            </View>
            <LoadPosts page={currentPage}/>

        </ScreenWrapper>
        
    );
}
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

export default PostScreen;