import React, { useEffect, useState,} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import PostScreen from '../Screen/PostScreen';
import AnimeScreen from '../Screen/animeScreen';
import ProfilePage from '../Components/Profile/ProfileNavigation';
import Anime from '../Components/Anime/Anime';
import SideMenu from 'react-native-side-menu-updated';
import animeScreen from '../Screen/animeScreen';
import { TouchableOpacity, View, Text, Pressable,StyleSheet, } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { DrawerLayoutAndroid } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import addAnimeScreen from '../Screen/addAnimeScreen';
import editProfile from '../Components/Profile/editProfile';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/State';
import Sidebar from './Sidebar';
import CommentScreen from '../Screen/CommentScreen';
import CommentNav from '../Screen/CommentNav';
import mainScreen from '../Screen/mainScreen';
import SearchList from '../Screen/SearchList';
import AnimePage from '../Components/Anime/AnimeNavigation'
import AllAnime from '../Screen/AllAnime';
import Profile from '../Components/Profile/UserProfilePageNavigation';

interface RouterProps
{
    children?: any
}
const Drawer = createDrawerNavigator();

const MainRoutes: React.FC<RouterProps> = (props:RouterProps) =>
{
    const [user,userType] = useSelector((state: IRootState) =>
    {
        return [state.sites.ILogin.username,state.sites.ILogin.userType];
})


    return (
        <NavigationContainer >
            <Drawer.Navigator initialRouteName='Login' drawerType = 'slide' drawerContent = {props => <Sidebar {...props} />} screenOptions = {({navigation})=>({
                        headerLeft: () => (<Pressable onPress={() => {navigation.openDrawer()}} style = {styles.menuImg}><Icon
                        name='menu' /></Pressable>),
                        headerShown:user !== 'Guest'
                      })}>
                {user === 'Guest' && <Drawer.Screen name="Login" component={Login} />}
                <Drawer.Screen name="Home" component={mainScreen} />
                 <Drawer.Screen name="All Anime" component={AllAnime} options={{drawerLabel:'Anime'}} />   
                <Drawer.Screen name="editProfile" component={editProfile} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="User" component={ProfilePage} options={{drawerLabel: () => null}}/>
                {userType === 'Admin' && <Drawer.Screen name="AnimeAdd" component={addAnimeScreen} />}
                <Drawer.Screen name="Post" component={PostScreen} options={{drawerLabel: () => null}}/>
                <Drawer.Screen name="Anime" component={AnimePage} options={{drawerLabel: () => null}}/>
                <Drawer.Screen name="Search" component = {SearchList} options={{drawerLabel: () => null}}/>
                <Drawer.Screen name="Comment" component={CommentNav} options={{drawerLabel: () => null}}/>

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

