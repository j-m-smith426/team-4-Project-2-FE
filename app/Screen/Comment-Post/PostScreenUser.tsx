import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';



import AddPost from '../../Components/Post/addPost';




import { useEffect } from 'react';
import { useCallback } from 'react';
import { Auth } from 'aws-amplify';
import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import LoadPosts from './LoadPosts';
import { IRootState } from '../../redux/State';
import ScreenWrapper from '../ScreenWrapper';



const PostScreenUser = () =>
{
    let isMounted = true;
    const user = isMounted && useSelector((state: IRootState) =>
    {
        return state.Login.ILogin.username;
    });
    const currentPage = isMounted && useSelector((state: IRootState) =>
    {
        return state.Login.ILogin.user.TYPEID;
    });
    useEffect(() =>
    {
        isMounted = true;
        return() => {isMounted = false}
    },[])
    
    return (
        <ScreenWrapper>
            <View style={styles.item}>

            {currentPage === 'U#'+user || currentPage.startsWith('A#') &&<AddPost username={user} userProfilePic="pic"/>}
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

export default PostScreenUser;