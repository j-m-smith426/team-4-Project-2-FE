import { DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerNavigationState } from "@react-navigation/routers";
import React, { useState } from "react";
import { View, Image,StyleSheet, TextInput, Pressable,} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import colors from "../config/colors";
import { LoginActions } from "../redux/Actions";


const Sidebar = (props: any) => {
    const [search, setSearch] = useState<string>("");
    const dispatch = useDispatch();
    const onUserChange = (name:string) => {
        setSearch(name);
    }
    const logOut = () =>
    {
        dispatch({
            type: LoginActions.LOGOUT
        });
        props.navigation.navigate('Login');
        console.log('logout');
    }
    
    const submit = async () => {
        console.log('current Search',search);
        props.navigation.navigate('Search', {val: search});
    }
    return (
        <View style={styles.container}>
            <View style = {styles.profImg}>
                <Image style={styles.image}
                source={require('../assets/scouter.png')} />
                
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    onChangeText ={onUserChange}
                    style={styles.TextInput}
                    placeholder="Search"
                    onSubmitEditing={()=>submit()}/>
                <Pressable onPress = {() => submit()} style={styles.btn}>
                    <Icon
                        color={colors.buttonSecondary}
                    name='search'/>
                </Pressable>
            </View>
            <View style={styles.scroll}>
                {/* <DrawerContentScrollView {...props} style = {styles.scroll}> */}
                    <DrawerItem
                        label='Logout'
                        onPress={logOut}
                        />
                    <DrawerItemList {...props} />
                {/* </DrawerContentScrollView> */}
            </View>

        </View>

    );
  }
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.background2  
      },
    btn:
    {
        height: '90%',
        flex:1,
        borderRadius:1000,
          backgroundColor: colors.buttonPrimary,
          alignSelf: 'center',
          alignItems: 'center',
        justifyContent: 'center'
        

    },
    profImg: {
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: "30%",
        maxWidth:500
        
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        padding: 10,
        borderRadius: 50,
        
        
    },
    inputView: {
        backgroundColor: colors.background,
        borderRadius: 1000,
        //flex: 1,
        maxHeight: '13%',
        marginBottom: "2%",
        alignContent: "center",
        flexDirection: "row",
        justifyContent: 'center',
        borderWidth: 1,
        
      },
      
    TextInput: {
        height: '90%',
        padding: 10,
        marginHorizontal: 10,
        flex: 3,
        borderRadius: 30,
    },
    scroll: {
        height: '60%'
    }

})
export default Sidebar;