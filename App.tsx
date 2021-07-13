import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Post from './app/Components/Post/Post';
<<<<<<< HEAD:App.tsx
import Login from './app/Screen/Login';
=======
import PostScreen from './app/Screen/PostScreen';
>>>>>>> 5ca1b9318ec29ebba0c115189c61d50decfec1a0:scouterAppFE/App.tsx

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD:App.tsx
      <Login />
      {/* <Post /> */}
=======
      <PostScreen/>
      
>>>>>>> 5ca1b9318ec29ebba0c115189c61d50decfec1a0:scouterAppFE/App.tsx
      
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
