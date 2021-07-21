
import React from "react"
import {TouchableOpacity, View, Text} from "react-native"

interface Imenu
{
    menu: any
}

const Navbar = (props: Imenu) =>
{


    return (
    <View>
        <TouchableOpacity onPress ={props.menu}>
            <Text>Open</Text>
        </TouchableOpacity>


    </View>);
};

export default Navbar;