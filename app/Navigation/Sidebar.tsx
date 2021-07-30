import { DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationState } from "@react-navigation/routers";
import React, { useState } from "react";
import { View, Image,StyleSheet, TextInput, Pressable,} from "react-native";
import { Icon } from "react-native-elements";
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
                <Pressable onPress = {() => submit()} style={styles.btn}>
                    <Icon
                    name='search'/>
                </Pressable>
            </View>
            <View style={styles.scroll}>
                <DrawerContentScrollView {...props} style = {styles.scroll}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
            </View>

        </View>

    );
  }
  const styles = StyleSheet.create({
    btn:
    {
        height: '90%',
        flex:1,
        borderRadius:1000,
        backgroundColor:colors.buttonPrimary,
        textAlignVertical:true

    },
    profImg: {
        alignItems: "center",
        justifyContent: "center",
        width: '80%',
        height: "30%",
        maxWidth:500
        
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
        flex:3,
        marginBottom: "2%",
        alignItems: "center",
        flexDirection: "row"
        
      },
      
    TextInput: {
        height: '90%',
        padding: 10,
        marginHorizontal: 10,
        flex: 3,
        borderRadius: 30,
        borderWidth:1
    },
    scroll: {
        height: '60%'
    }

})
export default Sidebar;