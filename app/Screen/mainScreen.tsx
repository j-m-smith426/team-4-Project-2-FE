import React from 'react';
import { StyleSheet, View } from 'react-native';

import AddPost from '../Components/Post/addPost';
import ScreenWrapper from './ScreenWrapper';


import { useSelector } from 'react-redux';
import { IRootState } from '../redux/State';
import { useNavigation } from '@react-navigation/native';
import LoadFollowedPosts from './Comment-Post/LoadFollowedPosts';



const PostScreen = () =>
{
    
    const [user] = useSelector((state: IRootState) =>
    {
        return [state.Login.ILogin.username];
    });
    let navigation = useNavigation();
    
    
    return (
        <ScreenWrapper>
            <View style={styles.item}>

            <AddPost username={user} userProfilePic="pic"/>
            </View>
            <LoadFollowedPosts />

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