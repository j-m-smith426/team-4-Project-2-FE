import { useNavigation } from "@react-navigation/native";
import React,{ useEffect, useState } from "react";
import { ScrollView, TextInput, View, Text, Image, StyleSheet, Platform, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native"
//import { Button } from "react-native-elements/dist/buttons/Button";
import * as ImagePicker from 'expo-image-picker'
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/State";
import { Storage } from 'aws-amplify'
import axiosConfig from "../../../axiosConfig";
import IUser from "../../model/User";
import { updateUser } from "./updateUser";
import Loading from "../../Screen/loading";
import colors from "../../config/colors";

let newUser: IUser = {
    REFERENCE: '0',
    TYPEID: '',
    name: '',
    bio: {
        greeting: '',
        description:''
    },
    image: 'key',
    watchlist: [],
    followed: [],
    favorites: []

}
const editBio = () =>
{   let isMounted = true;
    const [image, setImage] = isMounted && useState('key');
    const [user, setUser] = isMounted && useState<IUser>(newUser)
    const [isloading, setIsLoading] = isMounted && useState(false)
    const [greeting, setGreeting] = isMounted && useState(user.bio.greeting);
    const [descrip, setDescrip] = isMounted && useState(user.bio.description);
    const navigation = isMounted && useNavigation();
    const currentUser = isMounted && useSelector((state: IRootState) =>
    {
        return state.sites.ILogin.username;
    })

    useEffect(() =>
    {
        isMounted = true;
        if (isMounted) {
            
            (async () => {
                if (Platform.OS !== 'web') {
                    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    if (status !== 'granted') {
                        alert('Sorry, we need camera roll permissions to make this work!');
                    }
                }
            })();
            loadUser();
            console.log(user);
        }
        return() => {isMounted = false}
    }, [navigation,user.TYPEID]);
    
    const loadUser = () =>
    {
        axiosConfig.get('User/U_' + currentUser).then((response) =>
        {
            setUser(response.data);
            console.log(response.data);
            setGreeting(user.bio.greeting);
        setDescrip(user.bio.description);
            setImage(`https://scouter-revature-project1.s3.amazonaws.com/public/${user.image}`);
            
        })
        
    }
    

    console.log('user', user);
      const pickImage = async () => {
        let result:any = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };

    const submit = () =>
    {
        const Stamp = new Date().getTime();
        fetch(image).then((response) =>
        {
           
            console.log('Res', response);
            const access = { level: "public" };
            response.blob().then(blob =>
            {
                Storage.put(`${currentUser}/${Stamp}.jpg`, blob, access);
                    
            })
        });
       
        user.TYPEID = "U#" + currentUser;
        user.REFERENCE = "0";
        user.image = `${currentUser}/${Stamp}.jpg`;
        user.bio= {
                greeting,
                description: descrip
            }
           
        updateUser(user);
        
        navigation.navigate('User', {
            
        });
    }
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.background}
        >
                <View style={styles.background}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
                    <View style={styles.nameBar}>

            <Text style={styles.username}>{currentUser}</Text>
                    </View>
            {image !== 'key'? <Image
                style={styles.profilePicture}
                source={{ uri: image }}
                /> :
                <Image
                style={styles.profilePicture}
                source={{
                    //require('https://www.seekpng.com/png/detail/245-2454602_tanni-chand-default-user-image-png.png')}
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypACuX8ygmzipbD197uPBv40pqsvU8Egh-_Oo_xqg2OQqZbL1Cm-5XRxVcF3QjaocHCg&usqp=CAU',    
                }}
                />
                
            }
                    
            <Button color={colors.TabBarHeader} title="Choose Photo" onPress={pickImage}/>

                    
            <TextInput testID='greeting' maxLength={33} numberOfLines={1} style={styles.intro} placeholder='Add a Greeting Here' onChangeText={setGreeting} value={greeting}/>
        <View style={styles.bio}>
                <TextInput testID='description' style = {styles.info} placeholder="Tell us about yourself Here!" multiline onChangeText={setDescrip} value={descrip}/>
                
        </View>
        <Button color={colors.TabBarHeader} testID='submit' title="Submit" onPress={submit}/>

            </ScrollView>
    </TouchableWithoutFeedback>
        </View>
    </KeyboardAvoidingView>
    )
}

export default editBio;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingBottom: "5%",
        backgroundColor: colors.background,
        justifyContent: 'space-between'
    },

    username: {
        paddingVertical: "2%",
        textAlign: "center",
        //flex: 0.10,
        fontSize: 16,
        fontStyle: "italic",
    },
    nameBar: {
        flexDirection: 'row',
        //backgroundColor: colors.TabBarHeader,
        justifyContent: 'center',
        textAlign: 'center'
    },

    profilePicture: {
        alignSelf: "center",
        width: 150,
        height: 150,
        padding: "15%",
        margin: '5%',
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 600/2,
    },
    intro: {
        flex: 1,
        fontSize: 24,
        fontStyle: "italic",
        textAlign: "center",
        paddingTop: "5%"   
    },

    bio: {
        flex: 1,
        textAlign: "center",
        paddingHorizontal: "10%",
        paddingVertical: "5%"
    },

    info: {
        borderBottomWidth: 1,
        fontSize: 18,
    },
});