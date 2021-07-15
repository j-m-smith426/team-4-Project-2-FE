import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Post from './app/Components/Post/Post';
import Login from './app/Screen/Login';
import MainRoutes from './app/Navigation/MainRoutes';
import animeScreen from './app/Screen/animeScreen';
import PostScreen from './app/Screen/PostScreen';
import mainScreen from './app/Screen/mainScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  return (


       <View style={styles.container}>
         
  <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={mainScreen} />
        <Tab.Screen name="Posts" component={PostScreen} />
        <Tab.Screen name="Anime" component={animeScreen} />

      </Tab.Navigator>
    </NavigationContainer>
       {/*}  <MainRoutes />
      
      
      
    
    {<Login/> */}
        </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection:"column",

  },
});
