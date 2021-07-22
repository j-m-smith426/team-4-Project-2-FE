import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import PostScreen from '../Screen/PostScreen';

import Navbar from './NavBar';
import AnimeScreen from '../Screen/animeScreen';
import ProfilePage from '../Components/Profile/ProfileNavigation';

import SideMenu from 'react-native-side-menu-updated';
import animeScreen from '../Screen/animeScreen';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { DrawerLayoutAndroid } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

interface RouterProps
{
    children?: any
}
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MainRoutes: React.FC<RouterProps> = (props:RouterProps) =>
{
    const mainView =  () => {return(<Drawer.Navigator initialRouteName='Anime'>
    <Drawer.Screen name="Post" component={PostScreen} />
    <Drawer.Screen name="Anime" component={AnimeScreen} />
    <Drawer.Screen name="User" component={ProfilePage} />
</Drawer.Navigator>)};
    const [open, setOpen] = useState<boolean>(false);

    const openMenu = () => {setOpen(true)};
    return (
        <NavigationContainer >

<<<<<<< HEAD
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerTitle: props => <View><Navbar menu = {openMenu}></Navbar></View> }}>
                <Stack.Screen
                name="Login"
                component={Login}

                />
                <Stack.Screen
                    name="Main"
                    component={mainView}

                />


            </Stack.Navigator>
=======
            <SideMenu menu = {menu} isOpen= {open} onChange = {(isOpen) => {if(!isOpen){setOpen(false)}}} >
                <Stack.Navigator initialRouteName='Login' screenOptions={{ headerTitle: props => <View><Navbar menu = {openMenu}></Navbar></View> }}>
                    <Stack.Screen
                    name="Login"
                    component={Login}
                    {...props}
                    />
                    <Stack.Screen name="Post" component={PostScreen} />
                    <Stack.Screen name="Anime" component={AnimeScreen} />
                    <Stack.Screen name="User" component={ProfilePage} />
                </Stack.Navigator>
            </SideMenu>
>>>>>>> 5d8c13568d2ea5491bc93358f1ae099628df651a
        </NavigationContainer>
        
    );
}

export default MainRoutes;

