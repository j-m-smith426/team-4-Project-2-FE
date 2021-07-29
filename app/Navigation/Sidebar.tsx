import { DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationState } from "@react-navigation/routers";
import React from "react";
import { View, Image,StyleSheet,} from "react-native";

export function Sidebar(props: any) {
    return (
        <View>
            <View style = {styles.profImg}>
                <Image style={styles.image}
                source={require('../assets/icon.png')} />
                
            </View>
            <DrawerContentScrollView {...props}>

                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>

    );
  }
  const styles = StyleSheet.create({
    profImg: {
        alignItems: "center",
        justifyContent: "center",
        width: '80%',
        maxWidth:500,
        height: '50%'
        
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
        borderRadius: 50,
        
    }})