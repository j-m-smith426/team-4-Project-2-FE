import React, { useEffect, useState,} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import PostScreen from '../Screen/PostScreen';
import AnimeScreen from '../Screen/animeScreen';
import ProfilePage from '../Components/Profile/ProfileNavigation';

import SideMenu from 'react-native-side-menu-updated';
import animeScreen from '../Screen/animeScreen';
import { TouchableOpacity, View, Text, Pressable,StyleSheet, } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { DrawerLayoutAndroid } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
interface RouterProps
{
    children?: any
}
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainRoutes: React.FC<RouterProps> = (props:RouterProps) =>
{



    return (
        <NavigationContainer >
            <Drawer.Navigator initialRouteName='Login' screenOptions = {({navigation})=>({
                        headerLeft: () => (<Pressable onPress={() => {navigation.openDrawer()}} style = {styles.menuImg}><Icon
                        name='menu' /></Pressable>),
                        headerShown:true
                      })}>
                <Stack.Screen name="Login" component={Login}/>
                <Drawer.Screen name="Post" component={PostScreen} />
                <Drawer.Screen name="Anime" component={AnimeScreen} />
                <Drawer.Screen name="User" component={ProfilePage} />
            </Drawer.Navigator>
        </NavigationContainer>
        
    );
}
const styles = StyleSheet.create({
    menuImg: {
        marginLeft:20,
        
    },
});
export default MainRoutes;

