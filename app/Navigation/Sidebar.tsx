import { DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationState } from "@react-navigation/routers";
import React, { useState } from "react";
import { View, Image,StyleSheet, TextInput,} from "react-native";
import colors from "../config/colors";


const Sidebar = (props: any) => {
    const [search, setSearch]= useState<string>("");
    const onUserChange = (name:string) => {
        setSearch(name);
    }
    
    const submit = async () => {
        console.log('current Search',search);
        props.navigation.navigate('Search', {val: search});
    }
    return (
        <View>
            <View style = {styles.profImg}>
                <Image style={styles.image}
                source={require('../assets/icon.png')} />
                
            </View>
            <View style={styles.inputView}>
                    <TextInput 
                        onChangeText ={onUserChange}
                        style={styles.TextInput}
                        placeholder="Search"
                        onSubmitEditing={()=>submit()}/>
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
        
    },
    inputView: {
        backgroundColor: colors.background,
        borderRadius: 1000,
        width: "90%",
        //flex:2,
        height:"20%",
        marginBottom: "2%",
        alignItems: "center",
        
      },
      
    TextInput: {
        height: '90%',
        flex: 1,
        padding: 10,
        marginLeft: 20,
        width:'90%',
        borderRadius: 30,
        //outlineWidth: 0
    },
})
export default Sidebar;