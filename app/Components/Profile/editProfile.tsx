import { useNavigation } from "@react-navigation/native";
import React,{ useEffect, useState } from "react";
import { ScrollView, TextInput, View, Text, Image, StyleSheet, Platform } from "react-native"
import { Button } from "react-native-elements/dist/buttons/Button";
import * as ImagePicker from 'expo-image-picker'
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/State";
import { Storage } from 'aws-amplify'
import axiosConfig from "../../../axiosConfig";

const editBio = () =>
{
    const [image, setImage] = useState('key');
    const [user, setUser] = useState<any>({})
    const [greeting, setGreeting] = useState('');
    const [descrip, setDescrip] = useState('');
    const navigation = useNavigation();
    const currentUser = useSelector((state: IRootState) =>
    {
        return state.sites.ILogin.username;
    })

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
        loadUser();
    }, []);
    
    const loadUser = () =>
    {
        axiosConfig.get('User/U_' + currentUser).then((response) =>
        {
            setUser(response.data);
        })
    }

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
        axiosConfig.put('User', {
            userID: "U#"+currentUser,
            REFERENCE: "0",
            image: `${currentUser}/${Stamp}.jpg`,
            bio: {
                greeting,
                description: descrip
            },
            watchlist: user.watchlist || [],
            followed: user.followed || [],
            favorites: user.favorites || [],
        })
        navigation.navigate('User', {
            
        });
    }
    return(
        <ScrollView style = {styles.background}>
            <Text style={styles.username}>{currentUser}</Text>
            <Button title="submit" onPress={submit}/>
        {image !== 'key'? <Image
                style={styles.profilePicture}
                source={{ uri: image }}
            /> :
            <Image
            style={styles.profilePicture}
            source={require('../../assets/favicon.png')}
                />
                               
            }
            <Button title="choose picture" onPress={pickImage} />
            <TextInput style={styles.intro} placeholder='Greeting' onChangeText={setGreeting} value={greeting}/>
        <View style={styles.bio}>
                <Text>Synopsis:</Text>
                <TextInput placeholder="Say something nice about yourself" onChangeText={setDescrip} value={descrip}/>
                
        </View>
    </ScrollView>
    )
}

export default editBio;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    username: {
        paddingVertical: "4%",
        textAlign: "center",
        flex: 0.10,
        fontSize: 16,
        fontStyle: "italic",
    },

    profilePicture: {
        alignSelf: "center",
        width: 100,
        height: 100,
        paddingBottom: "25%",
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 100/2,
    },
    intro: {
        flex: 2,
        fontSize: 16,
        textAlign: "center",
        paddingTop: "5%"   
    },

    bio: {
        flex: 2,
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: "10%",
        paddingVertical: "5%"
    },
});