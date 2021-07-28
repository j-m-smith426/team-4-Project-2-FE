import { useNavigation } from "@react-navigation/native";
import React,{ useEffect, useState } from "react";
import { ScrollView, TextInput, View, Text, Image, StyleSheet, Platform } from "react-native"
import { Button } from "react-native-elements/dist/buttons/Button";
import * as ImagePicker from 'expo-image-picker'

const editBio = () =>
{
    const [image, setImage] = useState(undefined);
    const [greeting, setGreeting] = useState("Hi! My name is 2Chainz!");
    const [descrip, setDescrip] = useState("I like to watch the birdz");
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

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
        navigation.navigate('User');
    }
    return(
        <ScrollView style = {styles.background}>
            <Text style={styles.username}>Username</Text>
            <Button title="submit" onPress={submit}/>
        {image ? <Image
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