import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Post from './app/Components/Post/Post';
import PostScreen from './app/Screen/PostScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <PostScreen/>
      
      
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
