import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import PostScreen from '../Screen/PostScreen';

import Navbar from './NavBar';
import AnimeScreen from '../Screen/animeScreen';
import ProfilePage from '../Components/Profile/ProfilePage';

import SideMenu from 'react-native-side-menu-updated';
import animeScreen from '../Screen/animeScreen';
import { TouchableOpacity, View } from 'react-native';


interface RouterProps
{
    children?: any
}
const Stack = createStackNavigator();

const MainRoutes: React.FC<RouterProps> = (props:RouterProps) =>
{
    const menu =<View></View>;
    const [open, setOpen] = useState<boolean>(false);

    const openMenu = () => {setOpen(true)};
    return (
        <NavigationContainer >

            <SideMenu menu = {menu} isOpen= {open} onChange = {(isOpen) => {if(!isOpen){setOpen(false)}}} >
                <Stack.Navigator initialRouteName='Login' screenOptions={{ headerTitle: props => <View><Navbar menu = {openMenu}></Navbar></View> }}>
                    <Stack.Screen
                    name="Login"
                    component={Login}

                    />
                    <Stack.Screen name="Post" component={PostScreen} />
                    <Stack.Screen name="Anime" component={AnimeScreen} />
                    <Stack.Screen name="User" component={ProfilePage} />
                </Stack.Navigator>
            </SideMenu>
        </NavigationContainer>
        
    );
}

export default MainRoutes;