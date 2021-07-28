import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function addAnimeScreen()
{
    const [title, setTitle] = useState('title');
    const [description, setDescription] = useState('description');
    const [image, setImage] = useState(undefined);

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
    
    const submitPage = () =>
    {
        
    };

    const deletePage = () =>
    {
        
    };


  return (
    <View style={styles.container}>
       {/* <View style={styles.topMenu}>
       
       </View> */}
          {image && <Image
              style={styles.animeImg}
              source={{uri: image}} />}
        <Button title='addPicture' onPress={pickImage} />
          <View style={styles.lowerMenu}>
              <View style={styles.textInput} >

            
            <TextInput style={styles.title} placeholder="Title" onChangeText={setTitle}/>
              
              </View>
          </View>
          <View style={styles.lowerMenu}>
              <View style={styles.textInput} >
          <TextInput style={styles.descrption} multiline numberOfLines={3} placeholder="Description" onChangeText={setDescription} />
              </View>
          </View>
          
          <Button title='Submit' onPress={submitPage} />
          <Button title='Delete' onPress={deletePage} />
  </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  animeImg:{      
      height:200,
      width:300,
  },
    title: {
      flex:1,
      fontFamily:'',
      fontSize: 32,
      color:'#000000',
      textAlign:'center',
    },
    descrption: {
        flex:1,
      fontFamily:'',
      fontSize: 20,
      color:'#000000',
    },
  content : {
      marginLeft:30,
      marginRight:30,
      color:'#000000',
      textAlign:'center',
  },
  
  topMenu:{
      color:'white',
      fontSize:18,
      backgroundColor:'#072083',
      flexDirection:'row',
      padding:10,
  },
    lowerMenu: {
    flexDirection:'row',
    //backgroundColor:'#072083',
      alignContent: 'center',
      //borderWidth : 1,
      justifyContent: "space-around",

  },
  rating:{
      color:'black',
      fontSize:18,
  },
  header:{
      color:'white'
    },
    textInput: {
        flex: .7,
        flexDirection: "row",
  }
  
});
