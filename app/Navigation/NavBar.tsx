
import React, { useState } from "react"
import { useEffect } from "react";
import {TouchableOpacity, View, Text} from "react-native"
import { color } from "react-native-elements/dist/helpers";

interface Imenu
{
    menu: any
}

const Navbar = (props: Imenu) =>
{
    const [color, setColor] = useState<string>('black');
    const [pressed, setPressed] = useState<boolean>(false);
    useEffect(() => {if(pressed){props.menu();setPressed(false)}},[pressed]);

    return (
    <View>
        <TouchableOpacity onPress ={() => setPressed(true)}>
            <Text >Open</Text>
        </TouchableOpacity>


    </View>);
};

export default Navbar;