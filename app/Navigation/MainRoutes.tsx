import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Login from '../Screen/Login';
import PostScreen from '../Screen/PostScreen';
import ProfilePage from '../Components/Profile/ProfileNavigation';

import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import addAnimeScreen from '../Screen/addAnimeScreen';
import editProfile from '../Components/Profile/editProfile';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/State';
import Sidebar from './Sidebar';
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

const MainRoutes: React.FC<RouterProps> = () =>
{
    const [user,userType] = useSelector((state: IRootState) =>
    {
        return [state.sites.ILogin.username,state.sites.ILogin.userType];
})


    return (
        <NavigationContainer >
            <Drawer.Navigator initialRouteName='Login' drawerType = 'slide' drawerContent = {props => <Sidebar {...props} />} screenOptions = {({navigation})=>({
                        headerLeft: () => (<TouchableOpacity onPress={() => {navigation.openDrawer()}} style = {styles.menuImg}><Icon
                        name='menu' /></TouchableOpacity>),
                        headerShown:user !== 'Guest'
                      })}>
                <Drawer.Screen name="Home" component={mainScreen} />
                 <Drawer.Screen name="All Anime" component={AllAnime} options={{drawerLabel:'Anime'}} />   
                <Drawer.Screen name="Edit Profile" component={editProfile} />
                <Drawer.Screen name="Profile" component={Profile} />
                {userType === 'Admin' && <Drawer.Screen name="Add Anime" component={addAnimeScreen} />}
                <Drawer.Screen name="User" component={ProfilePage} options={{ drawerLabel: () => null}} />
                <Drawer.Screen name="Post" component={PostScreen} options={{drawerLabel: () => null}}/>
                <Drawer.Screen name="Anime" component={AnimePage} options={{drawerLabel: () => null}}/>
                <Drawer.Screen name="Search" component = {SearchList} options={{drawerLabel: () => null}}/>
                <Drawer.Screen name="Comment" component={CommentNav} options={{drawerLabel: () => null}}/>
                <Drawer.Screen name="Login" component={Login} options={{drawerLabel:() => null}} />

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

