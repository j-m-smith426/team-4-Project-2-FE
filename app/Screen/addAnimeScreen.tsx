import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import Button_animeComments from '../Components/Anime/Button_animeComments';
import Button_animeFavorite from '../Components/Anime/Button_animeFavorite';
import Button_animeRating from '../Components/Anime/Button_animeRating';



export default function AnimeScreen()
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
       <View style={styles.topMenu}>
       <Text style={styles.header}>Dragonball Z Anime Page</Text>
       </View>
          {image && <Image
              style={styles.animeImg}
              source={{uri: image}} />}
        <Button title='addPicture' onPress={pickImage} />

          <Text style={styles.title}>Title: </Text>
          <TextInput onChangeText={setTitle}/>
        
          <Text style={styles.content}>Description: </Text>
          <TextInput multiline numberOfLines={3} onChangeText={setDescription} />

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
  title:{
      fontFamily:'',
      fontSize: 32,
      color:'#000000',
      textAlign:'center',
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
  lowerMenu:{
    flexDirection:'row',
    //backgroundColor:'#072083',
    alignItems: 'center',
    justifyContent:'space-evenly',

  },
  rating:{
      color:'black',
      fontSize:18,
  },
  header:{
      color:'white'
  }
});
