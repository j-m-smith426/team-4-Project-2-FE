import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Post from './app/Components/Post/Post';
import Login from './app/Screen/Login';
import MainRoutes from './app/Navigation/MainRoutes';



import AnimeScreen from './app/Screen/animeScreen';



import PostScreen from './app/Screen/PostScreen';
import ProfilePage from './app/Components/Profile/ProfilePage';



export default function App() {
  return (


        // <View style={styles.container}>
      // <MainRoutes />
      <ProfilePage />
      
      );
    }
    {/* <Login/> */}
      //  </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:"column",

  },
});
