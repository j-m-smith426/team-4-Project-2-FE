import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react"
import { Pressable, TouchableOpacity, View } from "react-native"
import SideMenu from "react-native-side-menu";
import AnimeScreen from "../Screen/animeScreen";
import Login from "../Screen/Login";

const Drawer = createDrawerNavigator();

interface Imenu
{
    menu: any
}

const Navbar = (props: Imenu) =>
{


    return (
    <View>
        <TouchableOpacity onPress ={props.menu}>
            Open
        </TouchableOpacity>


    </View>);
};

export default Navbar;