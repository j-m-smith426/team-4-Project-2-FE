import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimeScreen from './app/Screen/animeScreen';
import Post from './app/Components/Post/Post';


export default function App() {
  return (
    <View style={styles.container}>
     <AnimeScreen/>
      {/* <Post /> */}   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
});
